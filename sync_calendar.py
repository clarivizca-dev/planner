"""little planner: calendar sync.
Runs on GitHub Actions. Downloads the calendar links saved in the
CALENDAR_URLS secret and writes calendar-feed.json for the app.
The links themselves are never written anywhere."""
import datetime as dt, hashlib, json, os, sys, urllib.request
from zoneinfo import ZoneInfo
import icalendar, recurring_ical_events

TZ = ZoneInfo("Europe/Madrid")
OUT = "calendar-feed.json"
urls = [u.strip().replace("webcal://", "https://", 1)
        for u in os.environ.get("CALENDAR_URLS", "").splitlines() if u.strip()]
if not urls:
    sys.exit("No CALENDAR_URLS secret found. Add it in Settings → Secrets and variables → Actions.")

today = dt.datetime.now(TZ).date()
start, end = today - dt.timedelta(days=14), today + dt.timedelta(days=150)

def local(x):
    if x.tzinfo is None:
        x = x.replace(tzinfo=TZ)
    return x.astimezone(TZ)

items, errors = {}, []
for n, url in enumerate(urls, 1):
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "little-planner-sync"})
        cal = icalendar.Calendar.from_ical(urllib.request.urlopen(req, timeout=60).read())
        for ev in recurring_ical_events.of(cal).between(start, end):
            s = ev.get("DTSTART").dt
            e = ev.get("DTEND").dt if ev.get("DTEND") else None
            title = str(ev.get("SUMMARY", "")).strip()
            if not title:
                continue
            all_day = not isinstance(s, dt.datetime)
            if all_day:
                date, st, en = s, None, None
            else:
                s = local(s)
                date, st = s.date(), s.strftime("%H:%M")
                en = None
                if isinstance(e, dt.datetime):
                    e = local(e)
                    en = e.strftime("%H:%M") if e.date() == date else "23:59"
            key = hashlib.sha1(f"{ev.get('UID', '')}|{date}|{st}|{title}".encode()).hexdigest()[:12]
            items[key] = {"id": key, "date": date.isoformat(), "start": st, "end": en,
                          "allDay": all_day, "title": title,
                          "location": str(ev.get("LOCATION", "") or "").strip()[:60]}
    except Exception as ex:  # never print the secret link
        errors.append(f"Calendar {n}: {type(ex).__name__}")

if not items:
    print("Nothing downloaded:", errors)
    sys.exit(1 if errors else 0)

body = {"from": start.isoformat(), "to": end.isoformat(), "sources": len(urls), "errors": errors,
        "items": sorted(items.values(), key=lambda x: (x["date"], x["start"] or "", x["title"]))}
try:
    old = json.load(open(OUT))
    if {k: old.get(k) for k in body} == body:
        print("No changes.")
        sys.exit(0)
except Exception:
    pass
body["updated"] = dt.datetime.now(TZ).isoformat(timespec="minutes")
json.dump(body, open(OUT, "w"), ensure_ascii=False, indent=0)
print(f"Saved {len(items)} items from {len(urls)} calendar(s).", errors or "")
