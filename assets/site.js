const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('nav');
if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));
