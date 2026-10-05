(function(){
  const answers=document.querySelectorAll('.answer');
  const setAnswers=(show)=>answers.forEach(a=>a.classList.toggle('show',show));
  document.getElementById('showAnswers').onclick=()=>setAnswers(true);
  document.getElementById('hideAnswers').onclick=()=>setAnswers(false);
  document.getElementById('expandAll').onclick=()=>setAnswers(true);
  document.getElementById('collapseAll').onclick=()=>setAnswers(false);

  // Discourage common copying/saving shortcuts. Browser/OS-level screenshots cannot be reliably blocked.
  ['copy','cut','dragstart','selectstart','contextmenu'].forEach(ev=>document.addEventListener(ev,e=>e.preventDefault()));
  document.addEventListener('keydown',function(e){
    const k=e.key.toLowerCase();
    if((e.ctrlKey||e.metaKey)&&['c','x','s','p','u'].includes(k)) e.preventDefault();
    if(e.key==='F12'||(e.ctrlKey&&e.shiftKey&&['i','j','c'].includes(k))) e.preventDefault();
  });
  document.addEventListener('visibilitychange',()=>{
    document.body.classList.toggle('blurred',document.hidden);
  });
})();
