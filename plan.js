/* ============================================================
   little planner: YOUR PLAN DATA
   To update the app, replace just this file on GitHub.
   Bump PLAN_VERSION every time so the app refreshes itself.
   ============================================================ */
const PLAN_VERSION="2026-09-15b";
const AREPA="Arepa base (makes 4, 100 g raw dough each): 200 g cottage cheese + 100 g Harina PAN + 100 ml water. Mix, rest 5 min, shape 4 arepas, cook on a dry pan 5–6 min a side. Keeps 3–4 days in the fridge. 1 arepa ≈ 140 kcal, 7–8 g protein.";
const COOKED="Weigh the chicken or salmon after cooking; the calories and protein assume cooked weight.";
const R={
 a2b:{c:"b",n:"Arepa + 2 eggs + berries",kc:335,pr:21,i:["1 cottage-cheese arepa","2 eggs","100 g berries"],s:AREPA,t:"Coffee or matcha is fine. Measure any milk or sweetener."},
 a3:{c:"b",n:"Arepa + 3 eggs",kc:355,pr:26,i:["1 cottage-cheese arepa","3 eggs"],s:AREPA,t:"Coffee or matcha is fine. Measure any milk or sweetener."},
 a3b:{c:"b",n:"Arepa + 3 eggs + berries",kc:405,pr:27,i:["1 cottage-cheese arepa","3 eggs","100 g berries"],s:AREPA,t:"Coffee or matcha is fine. Measure any milk or sweetener."},
 eb:{c:"b",n:"3 eggs + berries",kc:290,pr:20,i:["3 eggs","150 g berries"],s:"Scramble, fry or boil the eggs. Berries on the side.",t:"Coffee or matcha is fine. Measure any milk or sweetener."},
 bur:{c:"m",n:"Chicken burrito bowl",kc:475,pr:48,i:["100 g chicken breast","70 g cooked quinoa","60 g black beans","40 g corn","100 g cucumber","100 g tomato","30 g avocado","50 g 0% Greek yogurt"],sauce:"Yogurt + lime juice + garlic powder + paprika + salt + pepper.",s:"Lettuce, coriander, jalapeño and salsa add almost no calories.",t:COOKED},
 ter:{c:"m",n:"Teriyaki salmon bowl",kc:475,kt:"470–480",pr:38,i:["120 g salmon","80 g cooked rice","120 g cucumber","80 g carrots","120 g broccoli"],sauce:"10 g soy sauce + 5 g honey + garlic + ginger + a little water.",s:"Slice the cucumber and carrots very thin and keep them cold. Serve the salmon, broccoli and rice warm.",t:COOKED},
 med:{c:"m",n:"Mediterranean chicken bowl",kc:375,pr:42,i:["100 g chicken","80 g cooked quinoa","120 g cucumber","100 g tomato","30 g avocado"],sauce:"50 g 0% Greek yogurt + 10 g lemon juice + garlic powder + dill + salt + pepper.",s:"One of the lighter bowls. Very hungry? Use 120 g cooked quinoa (≈420 kcal). Packs well cold.",t:COOKED},
 hm:{c:"m",n:"Honey-mustard chicken + roasted veg",kc:430,pr:46,i:["100 g chicken breast","150 g potato","150 g asparagus","120 g broccoli","5 g olive oil"],sauce:"50 g 0% Greek yogurt + 10 g Dijon mustard + 5 g honey + lemon juice + salt + pepper.",s:"Cut the potatoes small and roast them with the broccoli and asparagus (200 °C, 25 min). Put the tray in before your shower.",t:COOKED},
 ssp:{c:"m",n:"Salmon + sweet potato bowl",kc:455,pr:40,i:["120 g salmon","130 g sweet potato","150 g asparagus","100 g broccoli","50 g Greek-yogurt lemon sauce"],s:"Feels substantial without being a huge meal. A good dinner.",t:COOKED},
 asn:{c:"m",n:"Asian chicken bowl",kc:425,pr:45,i:["100 g chicken","80 g cooked rice","120 g broccoli","80 g carrots","100 g cucumber","50 g edamame","10 g soy sauce"],sauce:"Ginger + garlic + chilli flakes + lime.",s:"Turn the cucumber into a quick salad with rice vinegar and soy sauce.",t:COOKED},
 cac:{c:"m",n:"Chicken avocado cucumber bowl",kc:410,pr:48,i:["120 g chicken","150 g cucumber","100 g tomato","50 g avocado","150 g asparagus","60 g cooked quinoa"],sauce:"50 g Greek yogurt + lime + cilantro + garlic.",s:"For days you don't want much rice or quinoa.",t:COOKED},
 scc:{c:"m",n:"Salmon cucumber crunch bowl",kc:520,pr:40,pt:"39–40",i:["120 g salmon","100 g cooked rice","150 g cucumber","80 g carrots","50 g edamame","30 g avocado"],sauce:"Soy sauce + lime + ginger + a little sriracha.",s:"A bit higher in calories, so it's best on a day with a lighter breakfast or lunch.",t:COOKED},
 yb:{c:"s",n:"Greek yogurt + blueberries",kc:135,pr:19,i:["170 g 0% Greek yogurt","80 g blueberries"]},
 ys:{c:"s",n:"Greek yogurt + strawberries",kc:140,pr:19,i:["170 g 0% Greek yogurt","150 g strawberries"]},
 ay:{c:"s",n:"Apple + Greek yogurt",kc:170,pr:18,i:["150 g apple","170 g 0% Greek yogurt"]},
 ed:{c:"s",n:"Edamame",kc:120,pr:12,i:["100 g edamame"],s:"Packs easily for uni."},
 cyd:{c:"s",n:"Cucumber + yogurt dip",kc:65,pr:7,i:["200 g cucumber","60 g 0% Greek yogurt"]},
 ch:{c:"s",n:"Carrots + hummus",kc:100,pr:4,i:["120 g carrots","30 g hummus"]},
 cs:{c:"s",n:"Cucumber salad",kc:60,pr:6,i:["200 g cucumber","50 g 0% Greek yogurt","10 g lemon juice","5 g Dijon mustard","dill, salt, pepper"],s:"Mix everything and refrigerate for 10–15 minutes."},
 fr:{c:"s",n:"Fruit",kc:75,kt:"60–90",pr:1,i:["150 g apple, orange or berries"]}
};
const kLabel=r=>`≈${r.kt||r.kc} kcal, ${r.pt||r.pr} g protein`;
const WO={
 A:"Lower body: goblet squat 3×10, Romanian deadlift 3×10, hip thrust 3×10, walking lunges 2×12 each leg, then 12 min incline walk.",
 B:"Upper body: lat pulldown 3×10, dumbbell bench press 3×10, seated row 3×10, shoulder press 3×10, plank 3×30 s, then 12 min bike.",
 S:"Short full-body: 3 rounds of goblet squat ×10, dumbbell row ×10, push-ups ×8, glute bridge ×12, then 8 min incline walk.",
 R:"Rest day: 15–20 min of hip, hamstring and back stretches. A longer dog walk counts too."
};
const SEC={m:["morning","☀"],u:["uni","🎓"],a:["afternoon","✿"],f:["focus time","☆"],g:["gym","♡"],e:["evening","☾"]};
const it=(t,l,s,o={})=>Object.assign({t,l,s},o);

const DUE=[
 {d:"2026-09-16",t:"S2 assignment",w:"11:59 am"},
 {d:"2026-09-16",t:"S3 assignment",w:"11:59 am"},
 {d:"2026-09-22",t:"2 items due",w:"names not in screenshot"},
 {d:"2026-09-25",t:"1 item due",w:"name not in screenshot"}
];

const DAYS={
"2026-09-15":{est:true,
 big3:["S2 assignment done (block 1)","S3 assignment done and both submitted tonight","40-min gym and dogs walked"],
 prep:["Screenshot the S2 + S3 submission confirmations"],
 wk:{cls:"9:30–12:20 (estimated)",gym:"Short full-body",study:"S2 + S3 assignments"},
 items:[
 it("7:15 am","Wake up","m"),it("7:20–7:45","Get ready","m"),it("7:45–8:05","Breakfast","m",{r:"a3b"}),it("8:05–8:25","Pack bag + teeth","m"),it("8:30 am","Leave for uni","m"),
 it("8:30–9:30","Commute to IE","u"),
 it("9:30–10:50","Marketing Management","u",{cls:1,n:"Estimated from next Tuesday. Send today's screenshot to confirm."}),
 it("11:00–12:20","Mathematics for Data Management","u",{cls:1,n:"Estimated from next Tuesday."}),
 it("12:20–1:20 pm","Commute home","u"),
 it("1:20–2:00","Walk the dogs 🐾","a"),it("2:00–2:30","Lunch","a",{r:"med"}),it("2:30–3:15","Nap (45 min)","a"),it("3:15–3:30","Wake up slowly + big glass of water","a"),
 it("3:30–4:45","S2 assignment, block 1","f",{tag:"due tomorrow",n:"Try every question yourself first, then check against class notes. Star anything you're stuck on."}),
 it("4:45–5:00","Snack + break","a",{r:"ay"}),
 it("5:00–6:00","S3 assignment, block 2","f",{tag:"due tomorrow",n:"Same method. Use the last 10 minutes on the questions you starred."}),
 it("6:00–6:15","Buffer / phone break","a"),
 it("6:15–6:25","Change for the gym","g"),it("6:25–7:05","Short workout (40 min, busy day)","g",{w:"S"}),it("7:05–7:25","Shower","g"),
 it("7:30–8:15","Cook + dinner","e",{r:"ter"}),it("8:15–9:00","Free time ♡","e"),
 it("9:00–9:45","Final check, then submit S2 + S3","f",{tag:"due 11:59 am tomorrow",n:"They're due while you're in class tomorrow, so get them in tonight."}),
 it("9:45–10:00","Tomorrow prep","e"),it("10:00–10:30","Night routine: skincare, teeth, phone away","e"),it("10:30 pm","Lights out (up at 6:45, 8¼ h)","e")
]},
"2026-09-16":{
 big3:["Programming practice block (1 h)","Algorithms flashcards for tomorrow","Full lower-body gym session"],
 prep:["Arepas left? If not, make a batch of 4","Tomorrow's Tech with Impact is in T-03.01, not T-06.02"],
 wk:{cls:"9:00–1:20",due:"S2 + S3 at 11:59 am",gym:"Lower body",study:"Programming practice"},
 items:[
 it("6:45 am","Wake up","m"),it("6:50–7:15","Get ready","m"),it("7:15–7:35","Breakfast","m",{r:"a3"}),it("7:35–7:55","Pack bag + check S2/S3 show as submitted","m"),it("8:00 am","Leave for uni","m"),
 it("8:00–9:00","Commute to IE","u"),
 it("9:00–10:20","Algorithms & Data Structures (Ses. 2)","u",{cls:1,n:"T-06.02"}),
 it("10:30–11:50","Programming for Data Management","u",{cls:1,n:"T-06.02"}),
 it("12:00–1:20","Mathematics for Data Management","u",{cls:1,tag:"S2 + S3 due 11:59",n:"T-06.02"}),
 it("1:20–2:20 pm","Commute home","u"),
 it("2:20–3:00","Walk the dogs 🐾","a"),it("3:00–3:30","Lunch","a",{r:"bur"}),it("3:30–4:15","Nap (45 min)","a"),it("4:15–4:30","Wake up + water","a"),
 it("4:30–5:30","Programming practice: redo today's exercises from a blank file","f"),
 it("5:30–5:45","Pre-gym snack","a",{r:"ay"}),
 it("5:45–6:00","Change for the gym","g"),it("6:00–7:00","Gym: lower body + cardio","g",{w:"A"}),it("7:00–7:20","Shower (veg in the oven first)","g"),
 it("7:25–8:05","Dinner","e",{r:"hm"}),
 it("8:05–8:45","Algorithms recall: flashcards + 2 problems from memory","f",{n:"Class tomorrow at 11:30."}),
 it("8:45–9:45","Free time ♡","e"),it("9:45–10:00","Tomorrow prep","e"),it("10:00–10:30","Night routine","e"),it("10:30 pm","Lights out (up at 6:15, 7¾ h)","e")
]},
"2026-09-17":{
 big3:["Prob & Stats practice questions","Math problems for Friday's class","Rest day: stretch and an early night"],
 prep:["Prob & Stats Ses. 8 tomorrow is asynchronous, nothing to attend"],
 wk:{cls:"8:30–12:50",gym:"Rest + stretch",study:"Prob & Stats practice"},
 items:[
 it("6:15 am","Wake up","m"),it("6:20–6:45","Get ready","m"),it("6:45–7:05","Breakfast","m",{r:"eb"}),it("7:05–7:25","Pack bag + teeth","m"),it("7:30 am","Leave for uni","m"),
 it("7:30–8:30","Commute to IE","u"),
 it("8:30–9:50","Probability & Statistics (Ses. 7)","u",{cls:1,n:"T-06.02"}),
 it("10:00–11:20","Technology with Impact (Ses. 2)","u",{cls:1,n:"Different room: T-03.01"}),
 it("11:30–12:50","Algorithms & Data Structures (Ses. 3)","u",{cls:1,n:"T-06.02"}),
 it("12:50–1:50 pm","Commute home","u"),
 it("1:50–2:30","Walk the dogs 🐾","a"),it("2:30–3:00","Lunch","a",{r:"scc"}),it("3:00–3:45","Nap (45 min)","a"),it("3:45–4:00","Wake up + water","a"),
 it("4:00–5:15","Prob & Stats: practice questions from this week","f",{n:"Test yourself before looking at solutions."}),
 it("5:15–5:30","Snack","a",{r:"cs"}),
 it("5:30–6:15","Math: practice problems before tomorrow's class","f"),
 it("6:15–7:15","Free time ♡","e"),
 it("7:15–7:35","Stretch / mobility (rest day)","g",{w:"R"}),
 it("7:40–8:20","Dinner","e",{r:"ssp"}),it("8:20–9:15","Free time ♡","e"),
 it("9:15–9:40","Final recall: Prob & Stats flashcards","f"),
 it("9:40–9:55","Tomorrow prep","e"),it("9:55–10:15","Night routine","e"),it("10:15 pm","Lights out (up at 6:15, 8 h)","e")
]},
"2026-09-18":{
 big3:["Prob & Stats Ses. 8 (asynchronous)","Find out what the 2 items due Tuesday are","Upper-body gym"],
 prep:["No alarm before 8:30 tomorrow ✿"],
 wk:{cls:"8:30–11:20 + async P&S",gym:"Upper body",study:"P&S async Ses. 8"},
 items:[
 it("6:15 am","Wake up","m"),it("6:20–6:45","Get ready","m"),it("6:45–7:05","Breakfast","m",{r:"a3b"}),it("7:05–7:25","Pack bag + teeth","m"),it("7:30 am","Leave for uni","m"),
 it("7:30–8:30","Commute to IE","u"),
 it("8:30–9:50","Programming for Data Management (Ses. 5)","u",{cls:1,n:"T-06.02"}),
 it("10:00–11:20","Mathematics for Data Management (Ses. 6)","u",{cls:1,n:"T-06.02"}),
 it("11:20–12:20 pm","Commute home","u"),
 it("12:20–1:00","Walk the dogs 🐾","a"),it("1:00–1:30","Lunch","a",{r:"asn"}),it("1:30–2:15","Nap (45 min)","a"),it("2:15–2:30","Wake up + water","a"),
 it("2:30–3:45","Prob & Stats Ses. 8 (asynchronous): material + exercises","f",{n:"It's an all-day async session, so this block is your class."}),
 it("3:45–4:00","Break","a"),
 it("4:00–4:45","Weekly review + open the 2 items due Tuesday","f"),
 it("4:45–5:00","Pre-gym snack","a",{r:"ay"}),
 it("5:00–5:15","Change for the gym","g"),it("5:15–6:15","Gym: upper body + cardio","g",{w:"B"}),it("6:15–6:35","Shower","g"),
 it("6:35–8:00","Free time, it's Friday ♡","e"),it("8:00–8:45","Dinner","e",{r:"cac"}),it("8:45–10:45","Free evening / friends","e"),
 it("10:45–11:15","Night routine","e"),it("11:30 pm","Lights out (up at 8:30, 9 h)","e")
]},
"2026-09-19":{
 big3:["Block 1 on Tuesday's 2 items","Grocery shop for the week","Lower-body gym + long dog walk"],
 prep:["Check the groceries cover next week's recipes"],
 wk:{cls:"No classes",gym:"Lower body",study:"Tuesday's 2 items"},
 items:[
 it("8:30 am","Wake up","m"),it("8:35–9:00","Slow morning + water","m"),it("9:00–9:30","Breakfast","m",{r:"a3b"}),
 it("9:30–10:15","Long dog walk 🐾","a"),
 it("10:30–10:45","Change for the gym","g"),it("10:45–11:45","Gym: lower body + cardio","g",{w:"A"}),it("11:45–12:05","Shower","g"),
 it("12:15–1:00 pm","Grocery shop","a",{n:"Chicken, salmon, eggs, FAGE 0%, cottage cheese, Harina PAN, berries, apples, cucumber, tomato, broccoli, asparagus, carrots, avocado, sweet potato, edamame, rice, quinoa."}),
 it("1:00–1:30","Lunch","a",{r:"cac"}),it("1:30–2:15","Nap (45 min)","a"),it("2:15–2:30","Wake up + water","a"),
 it("2:30–3:45","Tuesday's 2 items, block 1","f",{tag:"due Tue"}),
 it("3:45–4:00","Snack","a",{r:"ys"}),
 it("4:00–4:45","Algorithms recall for Monday","f"),
 it("4:45–8:00","Free time ♡","e"),it("8:00–8:45","Dinner","e",{r:"ter"}),it("8:45–11:00","Free evening / plans","e"),
 it("11:00–11:30","Night routine","e"),it("11:30 pm","Lights out (up at 8:30, 9 h)","e")
]},
"2026-09-20":{
 big3:["Finish Tuesday's 2 items","Meal prep lunches for Mon + Tue","Rest and an early night"],
 prep:["Alarm for 6:15"],
 wk:{cls:"No classes",gym:"Rest",study:"Finish Tuesday's items"},
 items:[
 it("8:30 am","Wake up","m"),it("8:35–9:00","Slow morning + water","m"),it("9:00–9:30","Breakfast","m",{r:"a3"}),
 it("9:30–10:15","Walk the dogs 🐾","a"),
 it("10:30–11:45","Tuesday's 2 items: finish + review","f",{tag:"due Tue"}),
 it("11:45–12:00","Break","a"),
 it("12:00–1:00 pm","Meal prep: chicken + quinoa for Mon/Tue bowls, and a batch of 4 arepas","a"),
 it("1:00–1:30","Lunch","a",{r:"med"}),it("1:30–2:15","Nap (45 min)","a"),
 it("2:30–4:30","Free afternoon ♡","e"),
 it("4:30–4:45","Snack","a",{r:"yb"}),
 it("5:00–5:45","Plan the week + Prob & Stats flashcards","f"),
 it("5:45–7:30","Free time","e"),it("7:30–8:15","Dinner","e",{r:"hm"}),it("8:15–9:30","Wind down","e"),
 it("9:30–9:45","Tomorrow prep","e"),it("9:45–10:15","Night routine","e"),it("10:15 pm","Lights out (up at 6:15, 8 h)","e")
]},
"2026-09-21":{
 big3:["Submit Tuesday's 2 items","Marketing prep for Ses. 5","Upper-body gym"],
 prep:[],
 wk:{cls:"8:30–11:20",gym:"Upper body",study:"Submit Tuesday's items"},
 items:[
 it("6:15 am","Wake up","m"),it("6:20–6:45","Get ready","m"),it("6:45–7:05","Breakfast","m",{r:"a3b"}),it("7:05–7:25","Pack bag + teeth","m"),it("7:30 am","Leave for uni","m"),
 it("7:30–8:30","Commute to IE","u"),
 it("8:30–9:50","Algorithms & Data Structures (Ses. 4)","u",{cls:1,n:"T-06.02"}),
 it("10:00–11:20","Probability & Statistics (Ses. 9)","u",{cls:1,n:"T-06.02"}),
 it("11:20–12:20 pm","Commute home","u"),
 it("12:20–1:00","Walk the dogs 🐾","a"),it("1:00–1:30","Lunch (meal-prepped)","a",{r:"bur"}),it("1:30–2:15","Nap (45 min)","a"),it("2:15–2:30","Wake up + water","a"),
 it("2:30–3:45","Tuesday's 2 items: final polish + submit","f",{tag:"due tomorrow"}),
 it("3:45–4:00","Snack","a",{r:"ay"}),
 it("4:00–5:00","Marketing: prep for tomorrow, write 3 questions","f"),
 it("5:15–5:30","Change for the gym","g"),it("5:30–6:30","Gym: upper body + cardio","g",{w:"B"}),it("6:30–6:50","Shower","g"),
 it("7:00–7:45","Dinner","e",{r:"ssp"}),it("7:45–9:15","Free time ♡","e"),
 it("9:15–9:40","Math recall: 5 problems from memory","f"),
 it("9:40–9:55","Tomorrow prep","e"),it("9:55–10:30","Night routine","e"),it("10:45 pm","Lights out (up at 7:15, 8½ h)","e")
]},
"2026-09-22":{
 big3:["Math problems from memory","Start Friday's item","Lower-body gym"],
 prep:[],
 wk:{cls:"9:30–12:20",due:"2 items due",gym:"Lower body",study:"Start Friday's item"},
 items:[
 it("7:15 am","Wake up","m"),it("7:20–7:45","Get ready","m"),it("7:45–8:05","Breakfast","m",{r:"a3b"}),it("8:05–8:25","Pack bag + double-check both submissions","m"),it("8:30 am","Leave for uni","m"),
 it("8:30–9:30","Commute to IE","u"),
 it("9:30–10:50","Marketing Management (Ses. 5)","u",{cls:1,n:"T-06.02"}),
 it("11:00–12:20","Mathematics (Ses. 7)","u",{cls:1,n:"T-06.02"}),
 it("12:20–1:20 pm","Commute home","u"),
 it("1:20–2:00","Walk the dogs 🐾","a"),it("2:00–2:30","Lunch (meal-prepped)","a",{r:"med"}),it("2:30–3:15","Nap (45 min)","a"),it("3:15–3:30","Wake up + water","a"),
 it("3:30–4:45","Math: redo today's problems without notes","f"),
 it("4:45–5:00","Snack","a",{r:"ay"}),
 it("5:00–6:00","Friday's item, block 1","f",{tag:"due Fri"}),
 it("6:15–6:25","Change for the gym","g"),it("6:25–7:25","Gym: lower body + cardio","g",{w:"A"}),it("7:25–7:45","Shower","g"),
 it("7:50–8:30","Dinner","e",{r:"asn"}),it("8:30–9:45","Free time ♡","e"),
 it("9:45–10:00","Tomorrow prep","e"),it("10:00–10:30","Night routine","e"),it("10:30 pm","Lights out (up at 6:45, 8¼ h)","e")
]},
"2026-09-23":{
 big3:["Friday's item, block 2","Programming practice","Rest day: stretch + dogs"],
 prep:["Tomorrow's Tech with Impact is in T-03.01","Late start tomorrow, alarm 8:00"],
 wk:{cls:"9:00–1:20",gym:"Rest + stretch",study:"Friday's item"},
 items:[
 it("6:45 am","Wake up","m"),it("6:50–7:15","Get ready","m"),it("7:15–7:35","Breakfast","m",{r:"a3"}),it("7:35–7:55","Pack bag + teeth","m"),it("8:00 am","Leave for uni","m"),
 it("8:00–9:00","Commute to IE","u"),
 it("9:00–10:20","Algorithms & Data Structures (Ses. 5)","u",{cls:1,n:"T-06.02"}),
 it("10:30–11:50","Programming (Ses. 6)","u",{cls:1,n:"T-06.02"}),
 it("12:00–1:20","Mathematics (Ses. 8)","u",{cls:1,n:"T-06.02"}),
 it("1:20–2:20 pm","Commute home","u"),
 it("2:20–3:00","Walk the dogs 🐾","a"),it("3:00–3:30","Lunch","a",{r:"cac"}),it("3:30–4:15","Nap (45 min)","a"),it("4:15–4:30","Wake up + water","a"),
 it("4:30–5:30","Friday's item, block 2","f",{tag:"due Fri"}),
 it("5:30–5:45","Snack","a",{r:"yb"}),
 it("5:45–6:30","Programming: redo today's exercises from a blank file","f"),
 it("6:45–7:05","Stretch / mobility (rest day)","g",{w:"R"}),
 it("7:15–8:00","Dinner","e",{r:"scc"}),it("8:00–9:00","Free time ♡","e"),
 it("9:00–9:30","Algorithms recall: flashcards + 2 problems","f"),
 it("9:30–10:15","Free time","e"),it("10:15–10:30","Tomorrow prep","e"),it("10:30–11:00","Night routine","e"),it("11:00 pm","Lights out (up at 8:00, 9 h)","e")
]},
"2026-09-24":{
 big3:["Finish + submit Friday's item","Prob & Stats Ses. 10 (asynchronous)","Short full-body gym"],
 prep:["Pack tomorrow's lunch bowl + edamame for the long day"],
 wk:{cls:"10:00–12:50 + async P&S",gym:"Short full-body",study:"Finish Friday's item"},
 items:[
 it("8:00 am","Wake up (late start ✿)","m"),it("8:05–8:30","Get ready","m"),it("8:30–8:50","Breakfast","m",{r:"a3b"}),it("8:50–9:00","Pack bag + teeth","m"),it("9:00 am","Leave for uni","m"),
 it("9:00–10:00","Commute to IE","u"),
 it("10:00–11:20","Technology with Impact (Ses. 3)","u",{cls:1,n:"Different room: T-03.01"}),
 it("11:30–12:50","Algorithms & Data Structures (Ses. 6)","u",{cls:1,n:"T-06.02"}),
 it("12:50–1:50 pm","Commute home","u"),
 it("1:50–2:30","Walk the dogs 🐾","a"),it("2:30–3:00","Lunch","a",{r:"ter"}),it("3:00–3:45","Nap (45 min)","a"),it("3:45–4:00","Wake up + water","a"),
 it("4:00–5:15","Friday's item: finish + submit","f",{tag:"due tomorrow"}),
 it("5:15–5:30","Snack","a",{r:"ys"}),
 it("5:30–6:30","Prob & Stats Ses. 10 (asynchronous): material + exercises","f"),
 it("6:40–6:50","Change for the gym","g"),it("6:50–7:30","Short workout (40 min)","g",{w:"S"}),it("7:30–7:50","Shower (veg in the oven first)","g"),
 it("8:00–8:40","Dinner","e",{r:"hm"}),it("8:40–9:30","Free time ♡","e"),
 it("9:30–9:45","Tomorrow prep","e"),it("9:45–10:15","Night routine","e"),it("10:15 pm","Lights out (up at 6:15, 8 h)","e")
]},
"2026-09-25":{
 big3:["Get through 4 classes ✿","Quick look at next week's deadlines","Rest day: stretch + dogs"],
 prep:["Sleep in tomorrow"],
 wk:{cls:"8:30–2:20",due:"1 item due",gym:"Rest",study:"Light weekly review"},
 items:[
 it("6:15 am","Wake up","m"),it("6:20–6:45","Get ready","m"),it("6:45–7:05","Breakfast","m",{r:"eb"}),it("7:05–7:25","Pack bag + lunch bowl + edamame","m"),it("7:30 am","Leave for uni","m"),
 it("7:30–8:30","Commute to IE","u"),
 it("8:30–9:50","Programming (Ses. 7)","u",{cls:1,n:"T-06.02"}),
 it("10:00–11:20","Mathematics (Ses. 9)","u",{cls:1,n:"T-06.02"}),
 it("11:30–12:50","Probability & Statistics (Ses. 11)","u",{cls:1,n:"T-06.02"}),
 it("12:50–1:00","Quick snack","u",{r:"ed"}),
 it("1:00–2:20","Attention Management for Learning (Ses. 1)","u",{cls:1,n:"T-06.02"}),
 it("2:20–2:45","Packed lunch bowl on campus","u",{r:"med",n:"You're not home until 3:45, so eat before the commute."}),
 it("2:45–3:45","Commute home","u"),
 it("3:45–4:25","Walk the dogs 🐾","a"),it("4:25–5:05","Nap (40 min)","a"),it("5:05–5:20","Wake up + snack","a",{r:"ay"}),
 it("5:20–6:00","Light review: what's due next week?","f"),
 it("6:00–6:20","Stretch / mobility (rest day)","g",{w:"R"}),
 it("6:20–8:00","Free time, it's Friday ♡","e"),it("8:00–8:45","Dinner","e",{r:"asn"}),it("8:45–10:45","Free evening / friends","e"),
 it("10:45–11:15","Night routine","e"),it("11:30 pm","Lights out","e")
]}
};

const WEEKS=[
 {name:"Sep 14–20",days:["2026-09-14","2026-09-15","2026-09-16","2026-09-17","2026-09-18","2026-09-19","2026-09-20"]},
 {name:"Sep 21–27",days:["2026-09-21","2026-09-22","2026-09-23","2026-09-24","2026-09-25","2026-09-26","2026-09-27"]}
];
