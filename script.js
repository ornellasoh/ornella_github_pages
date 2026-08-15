// Smooth reveal for cards and sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll(".glass, .section-heading").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
