
const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
if(menuBtn&&navLinks)menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
document.querySelectorAll('.section,.project-detail,.writing-card,.content-card,.post-card').forEach(el=>{el.classList.add('reveal');observer.observe(el)});
document.querySelectorAll('.profile-card').forEach(card=>card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateY(${x*8}deg) rotateX(${-y*8}deg)`}));
document.querySelectorAll('.profile-card').forEach(card=>card.addEventListener('mouseleave',()=>card.style.transform=''));
