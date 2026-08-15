const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:.08});

document.querySelectorAll('.glass,.section-title').forEach(el=>{
  el.classList.add('reveal');
  observer.observe(el);
});
