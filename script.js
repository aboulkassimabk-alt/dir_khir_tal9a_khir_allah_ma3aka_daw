const genBtn=document.getElementById('genBtn');
const vBox=document.getElementById('vBox');
const pBox=document.getElementById('pBox');
const fill=document.getElementById('fill');
const pText=document.getElementById('pText');
const aBox=document.getElementById('aBox');

genBtn.onclick=()=>{
  if(!document.getElementById('prompt').value.trim()){alert('كتب الوصف أولا!');return}
  genBtn.disabled=true; genBtn.textContent='⏳ جاري التوليد...';
  vBox.innerHTML='⚙️ كنصاوب لك الفيديو...'; pBox.classList.remove('hidden'); aBox.classList.add('hidden');
  let p=0; let iv=setInterval(()=>{p+=Math.random()*15; if(p>95)p=95; fill.style.width=p+'%'; pText.textContent='جاري التوليد '+Math.floor(p)+'%';},400);
  setTimeout(()=>{clearInterval(iv); fill.style.width='100%'; pText.textContent='تم بنجاح! ✅';
    vBox.innerHTML='<video autoplay loop muted controls><source src=https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4 type=video/mp4></video>';
    pBox.classList.add('hidden'); aBox.classList.remove('hidden'); genBtn.disabled=false; genBtn.textContent='🚀 ولد الفيديو الآن - مجاني';
  },6000);
};

document.getElementById('dlBtn').onclick=()=>{
  const a=document.createElement('a');
  a.href='https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  a.download='brahim-ai-video.mp4'; a.click();
};