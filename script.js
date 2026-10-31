const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
const dropBtn=document.getElementById('dropBtn');
const dropdown=dropBtn.closest('.dropdown');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'×':'☰';});
dropBtn.addEventListener('click',e=>{e.stopPropagation();dropdown.classList.toggle('show');});
document.addEventListener('click',e=>{if(!dropdown.contains(e.target))dropdown.classList.remove('show');});
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.textContent='☰';dropdown.classList.remove('show');}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('enquiry').addEventListener('submit',e=>{
 e.preventDefault();
 const name=document.getElementById('name').value.trim();
 const phone=document.getElementById('phone').value.trim();
 const appliance=document.getElementById('appliance').value;
 const problem=document.getElementById('problem').value.trim();
 const subject=encodeURIComponent('Service enquiry - '+appliance);
 const body=encodeURIComponent(`Hello Nikhil Electronics & Service Care,\n\nName: ${name}\nPhone: ${phone}\nAppliance: ${appliance}\nProblem: ${problem||'Not specified'}\n\nPlease contact me regarding this enquiry.`);
 window.location.href=`mailto:nikhilservicecare@gmail.com?subject=${subject}&body=${body}`;
});
