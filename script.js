const DB = {
gam: [
{paye:"نهم",dars:"ریاضی",fasl:"فصل ۱ - مجموعه‌ها",onvan:"فعالیت صفحه ۲",soal:"مجموعه اعداد طبیعی یک‌رقمی زوج را با عضوها بنویسید.",javab:"اعداد طبیعی یک‌رقمی زوج یعنی: ۲، ۴، ۶، ۸. پس مجموعه می‌شود {۸،۶،۴،۲}. دقت کن صفر زوج است ولی طبیعی نیست، پس نمی‌آید."},
{paye:"نهم",dars:"ریاضی",fasl:"فصل ۱ - مجموعه‌ها",onvan:"کار در کلاس صفحه ۶",soal:"اگر A={۱،۲،۳} و B={۳،۴،۵} اجتماع و اشتراک را بنویسید.",javab:"اشتراک یعنی مشترک‌ها: A∩B={۳}. اجتماع یعنی همه بدون تکرار: A∪B={۱،۲،۳،۴،۵}."},
{paye:"نهم",dars:"ریاضی",fasl:"فصل ۲ - اعداد حقیقی",onvan:"تمرین ۳ صفحه ۲۱",soal:"حاصل ۲√۳ + ۵√۳ را ساده کنید.",javab:"چون رادیکال‌ها مثل هم‌اند، ضریب‌ها جمع می‌شوند: ۷√۳. مثل سیب: ۲ سیب + ۵ سیب = ۷ سیب."},
{paye:"نهم",dars:"علوم",fasl:"فصل ۴ - حرکت",onvan:"فعالیت صفحه ۴۵",soal:"تندی متوسط خودرویی که ۲۴۰ کیلومتر را در ۳ ساعت می‌رود چقدر است؟",javab:"تندی = مسافت تقسیم بر زمان. ۲۴۰ ÷ ۳ = ۸۰ کیلومتر بر ساعت."},
{paye:"نهم",dars:"علوم",fasl:"فصل ۳ - فشار",onvan:"تمرین صفحه ۳۲",soal:"چرا نوک میخ تیز است؟ با مفهوم فشار توضیح دهید.",javab:"فشار = نیرو تقسیم بر سطح. سطح کوچک‌تر، فشار بیشتر. نوک تیز سطح خیلی کم دارد پس با نیروی کم به‌راحتی در چوب فرو می‌رود."},
{paye:"نهم",dars:"فارسی",fasl:"درس ۱ - آفرینش",onvan:"معنی بیت",soal:"معنی بیت «به نام خداوند جان و خرد / کزین برتر اندیشه برنگذرد» را بنویسید.",javab:"شاعر کتاب را به نام خدا شروع می‌کند. خدا بخشنده جان و خرد است و هیچ اندیشه‌ای بالاتر از او نمی‌رود، یعنی خدا برترین است."},
{paye:"نهم",dars:"عربی",fasl:"درس ۲",onvan:"ترجمه",soal:"«اَلْعِلْمُ نورٌ یُضیءُ الطَّریقَ» را ترجمه کنید.",javab:"دانش نوری است که راه را روشن می‌کند."},
{paye:"نهم",dars:"زبان",fasl:"Lesson 2",onvan:"گرامر حال استمراری",soal:"جمله They ... football now با فعل play کامل کنید.",javab:"They are playing football now. چون now داریم، حال استمراری است: am/is/are + فعل+ing."},
{paye:"هشتم",dars:"ریاضی",fasl:"فصل ۳ - چندضلعی‌ها",onvan:"تمرین",soal:"مجموع زاویه‌های داخلی هشت‌ضلعی چقدر است؟",javab:"فرمول: (n-2)×۱۸۰. پس (۸-۲)×۱۸۰=۶×۱۸۰=۱۰۸۰ درجه."},
{paye:"هفتم",dars:"ریاضی",fasl:"فصل ۵ - شمارنده‌ها",onvan:"تمرین",soal:"ب.م.م و ک.م.م ۱۲ و ۱۸ را پیدا کنید.",javab:"۱۲=۲×۲×۳ و ۱۸=۲×۳×۳. ب.م.م=۲×۳=۶. ک.م.م=۲×۲×۳×۳=۳۶."}
],
nemoone: [
{paye:"نهم",dars:"ریاضی",onvan:"نوبت اول - مجموعه‌ها (۲ نمره)",soal:"مجموعه {x|x عدد طبیعی و x<۵} را با عضوها بنویسید و تعداد زیرمجموعه‌هایش را بگویید.",javab:"اعضا: {۱،۲،۳،۴}. تعداد اعضا ۴ تاست، تعداد زیرمجموعه‌ها ۲ به توان ۴ یعنی ۱۶ تا."},
{paye:"نهم",dars:"ریاضی",onvan:"نوبت اول - اتحادها",soal:"حاصل (x+3)^2 را بنویسید.",javab:"مربع مجموع: x^2 +6x +9 . چون (a+b)^2 = a^2+2ab+b^2."},
{paye:"نهم",dars:"علوم",onvan:"نوبت اول - فصل حرکت",soal:"تفاوت تندی و سرعت را با مثال بنویسید.",javab:"تندی فقط مقدار دارد (۸۰ کیلومتر بر ساعت) ولی سرعت مقدار + جهت دارد (۸۰ کیلومتر بر ساعت به سمت شمال). سرعت برداری است."},
{paye:"نهم",dars:"علوم",onvan:"فشار - تستی مهم",soal:"اگر نیروی ۱۰۰ نیوتن بر سطح ۲ مترمربع وارد شود، فشار چقدر است؟",javab:"۵۰ پاسکال. چون ۱۰۰÷۲=۵۰."},
{paye:"نهم",dars:"فارسی",onvan:"نوبت دوم - دستور زبان",soal:"در جمله «دانش‌آموزان کوشا موفق شدند» نهاد و گزاره را مشخص کنید.",javab:"نهاد: دانش‌آموزان کوشا / گزاره: موفق شدند."},
{paye:"نهم",dars:"فارسی",onvan:"معنی واژه",soal:"معنی واژه‌های خرد، فرزانگی و شکیب را بنویسید.",javab:"خرد: عقل. فرزانگی: دانایی و حکمت. شکیب: صبر و بردباری."}
],
kholase: [
{paye:"نهم",dars:"ریاضی",fasl:"فصل ۱ - مجموعه‌ها - جمع‌بندی",matn:"۱- نمایش مجموعه: با عضو، با ویژگی، ون. ۲- تهی را با { } یا ∅ نشان می‌دهیم. ۳- تعداد زیرمجموعه‌ها: ۲ به توان n. ۴- تفاضل متقارن: عضوهایی که فقط در یکی باشند. نکته طلایی: A-B یعنی عضوهای A که در B نیستند."},
{paye:"نهم",dars:"علوم",fasl:"فصل ۴ - حرکت - فرمول‌ها",matn:"تندی متوسط = مسافت کل ÷ زمان کل. سرعت متوسط = جابه‌جایی ÷ زمان. شتاب = تغییر سرعت ÷ زمان. نمودار مکان-زمان خط راست مایل یعنی سرعت ثابت. نکته: در حرکت تندشونده شتاب هم‌جهت سرعت است."},
{paye:"نهم",dars:"فارسی",fasl:"آرایه‌های مهم",matn:"تشبیه: مثل، چون، مانند دارد. تشخیص: جان دادن به غیرجان (خندید گل). تضاد: شب و روز. تکرار و سجع در نثر. برای امتحان حتما ۴ مثال حفظ باش."}
],
flash: [
{dars:"ریاضی",q:"تعداد زیرمجموعه‌های یک مجموعه ۵ عضوی؟",a:"۳۲ تا (۲ به توان ۵)"},
{dars:"ریاضی",q:"فرمول (a-b)^2 ؟",a:"a^2 -2ab +b^2"},
{dars:"ریاضی",q:"√۱۶ × √۹ ؟",a:"۴×۳=۱۲"},
{dars:"علوم",q:"یکای فشار؟",a:"پاسکال (Pa)"},
{dars:"علوم",q:"فرمول شتاب؟",a:"تغییر سرعت تقسیم بر زمان"},
{dars:"علوم",q:"وسیله اندازه‌گیری نیرو؟",a:"نیروسنج"},
{dars:"فارسی",q:"مترادف «حیران»؟",a:"سرگردان، متحیر"},
{dars:"فارسی",q:"متضاد «آباد»؟",a:"ویران"},
{dars:"زبان",q:"معنی always ؟",a:"همیشه"},
{dars:"زبان",q:"گذشته فعل go ؟",a:"went"}
],
quiz: [
{q:"کدام مجموعه تهی است؟",o:["مجموعه اعداد زوج یک‌رقمی","مجموعه اعداد طبیعی بین ۲ و ۳","{۰}","مجموعه حروف فارسی"],c:1},
{q:"حاصل 3√2 + 4√2 چیست؟",o:["7√2","7√4","12√2","√14"],c:0},
{q:"(x+2)(x-2) برابر است با:",o:["x^2+4","x^2-4","x^2-4x+4","x^2+4x"],c:1},
{q:"اگر A={1,2} تعداد زیرمجموعه‌ها؟",o:["۲","۳","۴","۶"],c:2},
{q:"کدام گویا نیست؟",o:["1/2","0.5","√3","3-"],c:2},
{q:"شیب خط y=2x+5؟",o:["۵","۲","۷","۱"],c:1},
{q:"مجموع زاویه داخلی مثلث؟",o:["۹۰","۱۸۰","۳۶۰","۲۷۰"],c:1},
{q:"ک.م.م ۴ و ۶؟",o:["۲","۱۲","۲۴","۸"],c:1},
{q:"قدرمطلق ۵- ؟",o:["۵-","۵","۰","۱۰"],c:1},
{q:"حاصل 2^3 ؟",o:["۶","۸","۹","۴"],c:1}
]
};
let curPaye="نهم", flashIdx=0, flashFiltered=[], timerInt=null, timeLeft=600;
function showPage(id,btn){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');if(btn){document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));btn.classList.add('active');}window.scrollTo({top:0,behavior:'smooth'});}
function filterPaye(p){curPaye=p;document.querySelectorAll('.paye-row button').forEach(b=>b.classList.toggle('on',b.textContent===p));document.getElementById('gamPaye').value=p;renderGam();showPage('gam',document.querySelectorAll('.tab')[1]);}
function renderGam(){const paye=document.getElementById('gamPaye').value;const dars=document.getElementById('gamDars').value;const box=document.getElementById('gamList');const items=DB.gam.filter(g=>g.paye===paye&&(dars==="همه"||g.dars===dars));box.innerHTML=items.length?items.map((g,i)=>`<div class="item"><h4>${g.onvan}</h4><span class="tag">${g.paye}</span><span class="tag">${g.dars}</span><span class="tag">${g.fasl}</span><div class="q"><b>سوال:</b> ${g.soal}</div><div class="a" id="ga${i}"><b>حل مدرس یزدی:</b> ${g.javab}</div><button class="btn" onclick="document.getElementById('ga${i}').classList.toggle('show');this.textContent=this.textContent==='دیدن جواب'?'بستن جواب':'دیدن جواب'">دیدن جواب</button></div>`).join(""):"<p class='hint'>برای این فیلتر هنوز چیزی ثبت نشده. خودت به DB اضافه کن!</p>";document.getElementById('st-gam').textContent=DB.gam.length;}
function renderNem(){const d=document.getElementById('nemDars').value;const box=document.getElementById('nemList');const items=DB.nemoone.filter(n=>d==="همه"||n.dars===d);box.innerHTML=items.map((n,i)=>`<div class="item"><h4>${n.onvan}</h4><span class="tag">${n.paye}</span><span class="tag">${n.dars}</span><div class="q">${n.soal}</div><div class="a" id="na${i}"><b>پاسخ تشریحی:</b> ${n.javab}</div><button class="btn orange" onclick="document.getElementById('na${i}').classList.toggle('show');this.textContent=this.textContent==='دیدن پاسخ تشریحی'?'بستن':'دیدن پاسخ تشریحی'">دیدن پاسخ تشریحی</button></div>`).join("");}
function renderKholase(){document.getElementById('kholaseList').innerHTML=DB.kholase.map(k=>`<div class="item"><h4>${k.fasl}</h4><span class="tag">${k.paye}</span><span class="tag">${k.dars}</span><div class="q">${k.matn}</div></div>`).join("");}
function renderFlash(){const d=document.getElementById('flashDars').value;flashFiltered=DB.flash.filter(f=>d==="همه"||f.dars===d);flashIdx=0;showFlash();}
function showFlash(){if(!flashFiltered.length){document.getElementById('flashQ').textContent="کارت نیست";document.getElementById('flashA').textContent="فیلتر دیگری انتخاب کن";return;}document.getElementById('flashCard').classList.remove('flipped');document.getElementById('flashQ').textContent=flashFiltered[flashIdx].q;document.getElementById('flashA').textContent=flashFiltered[flashIdx].a;document.getElementById('flashNum').textContent=(flashIdx+1)+" / "+flashFiltered.length;}
function flipFlash(){document.getElementById('flashCard').classList.toggle('flipped');}
function nextFlash(){flashIdx=(flashIdx+1)%flashFiltered.length;showFlash();}
function prevFlash(){flashIdx=(flashIdx-1+flashFiltered.length)%flashFiltered.length;showFlash();}
function startQuiz(){document.getElementById('startQuizBtn').classList.add('hidden');document.getElementById('finishBtn').classList.remove('hidden');document.getElementById('karname').classList.add('hidden');const box=document.getElementById('quizList');box.innerHTML=DB.quiz.map((s,i)=>`<div class="quiz-q"><b>${i+1}. ${s.q}</b>${s.o.map((op,j)=>`<label><input type="radio" name="q${i}" value="${j}">${op}</label>`).join("")}</div>`).join("");timeLeft=600;clearInterval(timerInt);timerInt=setInterval(()=>{timeLeft--;let m=Math.floor(timeLeft/60),s=timeLeft%60;document.getElementById('timer').textContent=(m<10?"0"+m:m)+":"+(s<10?"0"+s:s);if(timeLeft<=0){finishQuiz();}},1000);}
function finishQuiz(){clearInterval(timerInt);let score=0;DB.quiz.forEach((s,i)=>{let sel=document.querySelector(`input[name=q${i}]:checked`);if(sel&&parseInt(sel.value)===s.c)score++;});let pct=Math.round(score/DB.quiz.length*100);let msg=pct>=90?"فوق‌العاده‌ای! تو آماده نهایی هستی 🎉":pct>=70?"خیلی خوبه، فقط چند نکته رو مرور کن 💪":pct>=50?"بد نیست، ولی باید خلاصه‌ها رو دوباره بخونی 📚":"اشکال نداره، از گام‌به‌گام شروع کن، می‌ترکونی 🚀";document.getElementById('karname').innerHTML=`<h3>کارنامه مدرس یزدی</h3><b>${pct}٪</b><p>${score} از ${DB.quiz.length} درست</p><p>${msg}</p>`;document.getElementById('karname').classList.remove('hidden');window.scrollTo({top:document.getElementById('karname').offsetTop-80,behavior:'smooth'});}
function globalSearch(v){if(!v||v.length<2)return;showPage('gam',document.querySelectorAll('.tab')[1]);const box=document.getElementById('gamList');const items=DB.gam.filter(g=>g.soal.includes(v)||g.javab.includes(v)||g.fasl.includes(v)||g.dars.includes(v));box.innerHTML=items.map((g)=>`<div class="item"><h4>${g.onvan} - ${g.fasl}</h4><div class="q">${g.soal}</div><div class="a show">${g.javab}</div></div>`).join("")||"<p class='hint'>چیزی پیدا نشد.</p>";}
let tasks=JSON.parse(localStorage.getItem('modarres_tasks')||"[]");
function saveTasks(){localStorage.setItem('modarres_tasks',JSON.stringify(tasks));renderTasks();}
function addTask(){let v=document.getElementById('taskInput').value.trim();if(!v)return alert("اول هدفت رو بنویس!");tasks.push({t:v,done:false});document.getElementById('taskInput').value="";saveTasks();}
function toggleTask(i){tasks[i].done=!tasks[i].done;saveTasks();}
function delTask(i){tasks.splice(i,1);saveTasks();}
function clearTasks(){if(confirm("همه پاک بشه؟")){tasks=[];saveTasks();}}
function renderTasks(){let ul=document.getElementById('taskList');ul.innerHTML=tasks.map((x,i)=>`<li class="${x.done?'done':''}"><span><input type="checkbox" ${x.done?'checked':''} onchange="toggleTask(${i})"> ${x.t}</span><button onclick="delTask(${i})">حذف</button></li>`).join("")||"<p class='hint'>هنوز هدفی ثبت نکردی. یه هدف کوچیک برای امروز بذار.</p>";let done=tasks.filter(t=>t.done).length;let pct=tasks.length?Math.round(done/tasks.length*100):0;document.getElementById('progBar').style.width=pct+"%";document.getElementById('progText').textContent=tasks.length?`پیشرفت امروز: ${pct}٪ (${done} از ${tasks.length})`:"";}
renderGam();renderNem();renderKholase();renderFlash();renderTasks();
document.getElementById('st-nem').textContent=DB.nemoone.length*3;
document.getElementById('st-flash').textContent=DB.flash.length;