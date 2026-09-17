/* ============================================================
   little planner: SEED DATA (classes + deadlines from your calendar)
   Replace this file on GitHub to update. Bump SEED.version each time.
   Anything you add or tick inside the app is kept on your phone.
   ============================================================ */
const COURSES={
 ALG:{n:"Algorithms & Data Structures",s:"Algorithms",c:"blue"},
 PROG:{n:"Programming for Data Management",s:"Programming",c:"butter"},
 MATH:{n:"Mathematics for Data Management",s:"Math",c:"green"},
 PS:{n:"Probability & Statistics",s:"Prob & Stats",c:"lav"},
 MKT:{n:"Marketing Management",s:"Marketing",c:"pink"},
 TWI:{n:"Technology with Impact",s:"Tech w/ Impact",c:"peach",room:"T-03.01"},
 BPR:{n:"Building Powerful Relationships",s:"Relationships",c:"peach"},
 AML:{n:"Attention Management for Learning",s:"Attention Mgmt",c:"blue"},
 OTHER:{n:"Other",s:"Other",c:"butter"}
};
const SEED={
 version:"2026-09-15e",
 year:2026,
 classLength:80,
 /* "MM-DD HH:MM CODE note"  or  "MM-DD async CODE" */
 classes:`
09-14 08:30 ALG|09-14 10:00 PS
09-15 09:30 MKT|09-15 11:00 BPR
09-16 09:00 ALG|09-16 10:30 PROG|09-16 12:00 MATH
09-17 08:30 PS|09-17 10:00 TWI|09-17 11:30 ALG
09-18 async PS|09-18 08:30 PROG|09-18 10:00 MATH
09-21 08:30 ALG|09-21 10:00 PS
09-22 09:30 MKT|09-22 11:00 MATH
09-23 09:00 ALG|09-23 10:30 PROG|09-23 12:00 MATH
09-24 async PS|09-24 10:00 TWI|09-24 11:30 ALG
09-25 08:30 PROG|09-25 10:00 MATH|09-25 11:30 PS|09-25 13:00 AML
09-28 async TWI|09-28 08:30 ALG|09-28 10:00 PS
09-29 08:00 BPR|09-29 11:00 MKT
09-30 09:00 ALG|09-30 10:30 PROG|09-30 12:00 MATH
10-01 async PS|10-01 10:00 TWI|10-01 11:30 ALG
10-02 08:30 PROG|10-02 10:00 MATH|10-02 11:30 PS
10-05 async PS|10-05 08:30 ALG|10-05 11:30 PROG
10-06 09:30 MKT|10-06 11:00 BPR
10-07 09:00 ALG|10-07 10:30 PROG|10-07 12:00 MATH
10-08 08:30 PS|10-08 10:00 TWI|10-08 11:30 ALG
10-09 08:30 PROG|10-09 10:00 MATH|10-09 11:30 PS
10-13 09:30 MKT|10-13 11:00 BPR
10-14 09:00 ALG|10-14 10:30 PROG|10-14 12:00 MATH
10-15 08:30 PS|10-15 10:00 TWI|10-15 11:30 ALG
10-16 08:30 PROG|10-16 10:00 MATH|10-16 11:30 PS
10-19 async PS|10-19 08:30 ALG midterm
10-20 08:00 BPR|10-20 11:00 MKT
10-21 09:00 ALG|10-21 10:30 PROG|10-21 12:00 MATH
10-22 08:30 PS|10-22 10:00 TWI|10-22 11:30 ALG
10-23 08:30 PROG|10-23 10:00 MATH|10-23 11:30 PS|10-23 13:00 AML
10-26 08:30 ALG|10-26 10:00 PS
10-27 09:30 MKT|10-27 11:00 BPR
10-28 09:00 ALG|10-28 10:30 PROG|10-28 12:00 MATH
10-29 10:00 TWI|10-29 11:30 ALG
10-30 08:30 PROG|10-30 10:00 MATH|10-30 11:30 PS
11-03 09:30 MKT|11-03 11:00 BPR
11-04 09:00 ALG|11-04 10:30 PROG|11-04 12:00 MATH
11-05 async PS|11-05 10:00 TWI|11-05 11:30 ALG
11-06 08:30 PROG|11-06 10:00 MATH|11-06 11:30 PS
11-10 11:00 MKT
11-11 09:00 ALG|11-11 10:30 PROG|11-11 12:00 MATH
11-12 08:30 PS|11-12 10:00 TWI|11-12 11:30 ALG
11-13 async PS|11-13 08:30 PROG|11-13 10:00 MATH
11-16 10:00 PS|11-16 11:30 PROG
11-17 09:30 MKT|11-17 11:00 BPR
11-18 09:00 ALG|11-18 10:30 PROG|11-18 12:00 MATH
11-19 async BPR|11-19 10:00 TWI|11-19 11:30 ALG
11-20 08:30 PROG|11-20 10:00 MATH|11-20 11:30 PS
11-23 10:00 PS
11-24 09:30 MKT|11-24 11:00 BPR
11-25 09:00 ALG|11-25 10:30 PROG|11-25 12:00 MATH
11-26 08:30 PROG|11-26 10:00 TWI|11-26 11:30 ALG
11-27 10:00 MATH|11-27 11:30 PS
12-01 11:00 MKT
12-02 09:00 ALG|12-02 10:30 PROG|12-02 12:00 MATH
12-03 08:00 TWI
12-04 08:30 PROG|12-04 10:00 MATH|12-04 11:30 PS
12-09 10:30 BPR final presentation
12-10 11:30 ALG final exam
12-11 10:00 PS final exam
12-16 10:30 PROG final exam
12-17 09:30 MKT
12-18 10:00 MATH final exam`,
 /* [due MM-DD, time or "", course, type (quiz|exam|assignment|project|presentation|task), title, note] */
 tasks:[
 ["09-08","","PS","task","Homework: retake notes (base of the course)"],
 ["09-15","","MKT","task","Share product + company idea with class (no presentation)"],
 ["09-15","23:59","MKT","quiz","Chapter 8 warm-up + quiz","Warm-up done, quiz left"],
 ["09-16","11:59","OTHER","assignment","S2 assignment","Course not shown in the screenshot"],
 ["09-16","11:59","OTHER","assignment","S3 assignment","Course not shown in the screenshot"],
 ["09-17","","PS","quiz","Quiz 1"],
 ["09-18","","PS","quiz","Quiz 2 (async)"],
 ["09-22","23:59","MKT","quiz","Chapter 9 warm-up + quiz"],
 ["09-24","","PS","quiz","Quiz 3 (async)"],
 ["09-25","","MKT","project","Group work: product and strategy"],
 ["09-29","","MKT","presentation","Delivery #1 presentation: product"],
 ["10-01","","PS","quiz","Quiz 4 (async)"],
 ["10-02","","MATH","quiz","Quiz 1 (session 11)","Date estimated by counting sessions, confirm on Blackboard"],
 ["10-05","","ALG","project","Project 1 submission"],
 ["10-06","23:59","MKT","quiz","Chapter 10 warm-up + quiz"],
 ["10-06","","MKT","quiz","Chapter 11 warm-up + quiz"],
 ["10-06","","MKT","exam","Intermediate test #1"],
 ["10-06","","BPR","presentation","TEDx communication presentation"],
 ["10-08","","PS","assignment","Homework: assignment 1"],
 ["10-17","23:59","MKT","project","Group work: price and distribution"],
 ["10-19","08:30","ALG","exam","Midterm"],
 ["10-20","23:59","MKT","quiz","Chapter 12 warm-up + quiz"],
 ["10-20","","MKT","presentation","Delivery #2: pricing and distribution"],
 ["10-27","23:59","MKT","quiz","Chapter 13 warm-up + quiz"],
 ["10-31","","ALG","project","Project 2 submission"],
 ["11-03","23:59","MKT","quiz","Chapter 14 warm-up + quiz"],
 ["11-03","","BPR","presentation","TEDx topic"],
 ["11-10","23:59","MKT","quiz","Chapter 15 warm-up + quiz"],
 ["11-13","","MATH","quiz","Quiz 2 (session 23)","Date estimated by counting sessions, confirm on Blackboard"],
 ["11-14","23:59","OTHER","assignment","Communication deadline","Title was cut off, check Blackboard"],
 ["11-17","23:59","MKT","quiz","Chapter 17 warm-up + quiz"],
 ["11-24","23:59","MKT","quiz","Chapter 20 warm-up + quiz"],
 ["11-27","23:59","OTHER","project","Group work deadline","Title was cut off, check Blackboard"],
 ["11-29","23:59","OTHER","project","Group work deadline","Title was cut off, check Blackboard"],
 ["11-30","","ALG","project","Project 3: UX test recordings"],
 ["11-30","","ALG","project","Project 3: code directory"],
 ["11-30","","ALG","project","Project 3: UX test report + retrospective"],
 ["12-02","11:30","OTHER","presentation","Group work session","Title was cut off, check Blackboard"],
 ["12-09","","BPR","presentation","Final presentation"],
 ["12-09","23:59","MKT","assignment","Marketing Management deadline","Title was cut off, check Blackboard"],
 ["12-10","11:30","ALG","exam","Final exam"],
 ["12-11","10:00","PS","exam","Final exam"],
 ["12-11","23:59","OTHER","task","Give feedback"],
 ["12-12","","ALG","project","Project 4: final written report"],
 ["12-12","","ALG","project","Project 4: final code directory"],
 ["12-15","23:59","OTHER","task","Read received feedback","Title was cut off, check Blackboard"],
 ["12-16","10:30","PROG","exam","Final exam"],
 ["12-18","10:00","MATH","exam","Final exam"],
 ["12-19","23:59","OTHER","task","Reflection","Title was cut off, check Blackboard"],
 ["12-19","23:59","MKT","assignment","Marketing Management deadline","Title was cut off, check Blackboard"]
 ]
};

/* ---------------- menu (your recipes) ---------------- */
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
