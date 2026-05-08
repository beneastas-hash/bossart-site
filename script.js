async function loadSite(){
 const r=await fetch('content/site.json'); const s=await r.json();
 const $=id=>document.getElementById(id);
 $('logoSmall').src=s.brand.logo; $('logoMain').src=s.brand.logo; $('brandName').textContent=s.brand.name;
 $('badge').textContent=s.hero.badge; $('title').textContent=s.hero.title; $('subtitle').textContent=s.hero.subtitle;
 $('telTop').href='tel:'+s.contact.phone_link; $('telTop').textContent=s.contact.phone;
 $('waHero').href='https://wa.me/'+s.contact.whatsapp;
 $('b1l').textContent=s.budget.line1_label; $('b1p').textContent=s.budget.line1_price;
 $('b2l').textContent=s.budget.line2_label; $('b2p').textContent=s.budget.line2_price;
 $('beforeImg').src=s.gallery.before; $('afterImg').src=s.gallery.after;
 $('gallery').innerHTML=s.gallery.photos.map(p=>`<img src="${p.image}" alt="${p.alt||''}">`).join('');
 $('telContact').href='tel:'+s.contact.phone_link; $('telContact').textContent='📞 '+s.contact.phone;
 $('waContact').href='https://wa.me/'+s.contact.whatsapp; $('waContact').textContent='💬 WhatsApp';
 $('mailContact').href='mailto:'+s.contact.email; $('mailContact').textContent='✉️ '+s.contact.email;
 $('waFloat').href='https://wa.me/'+s.contact.whatsapp;
}
loadSite();
const slider=document.getElementById('slider'), after=document.getElementById('afterImg'), line=document.getElementById('line');
function move(v){ after.style.clipPath=`inset(0 0 0 ${v}%)`; line.style.left=v+'%';}
slider.addEventListener('input',e=>move(e.target.value)); move(50);
