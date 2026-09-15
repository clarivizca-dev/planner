# little planner: setup

## 1. Put it online (free, one time)
1. Make a free account at github.com.
2. Tap **+ → New repository**. Name it `planner`, set it to **Public**, and tap **Create repository**.
3. Tap **uploading an existing file**. Drag in every file from this folder (index.html, plan.js, sw.js, manifest.webmanifest and the 3 icons), then tap **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch", choose **main** and **/ (root)**, then tap **Save**.
5. After about a minute, your app is live at `https://YOUR-USERNAME.github.io/planner/`.

## 2. Put it on your phone
- **iPhone:** open the link in **Safari**, tap **Share**, then tap **Add to Home Screen**.
- **Android:** open the link in **Chrome**, tap **⋮**, then tap **Install app** (or **Add to Home screen**).

## 3. Turn on reminders
1. Install the free **ntfy** app and allow notifications.
2. Open the planner and tap **🔔**. Copy your topic.
3. In ntfy, tap **+** and paste the topic to subscribe.
4. Back in the planner, tap **send test**, then turn **Reminders on**.
5. Open the planner about once a day. Each time, it queues reminders for the next two days.

## When Claude sends you a fix
Claude gives you a new `plan.js`. In your GitHub repo, tap **Add file → Upload files**, drop in the new `plan.js`, and tap **Commit changes**. Within a minute or two, the app refreshes itself the next time you open it.
