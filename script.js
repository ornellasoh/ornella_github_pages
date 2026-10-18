// Show the header's scroll edge only while content runs underneath it.
const topbar = document.querySelector('.topbar');
if (topbar) {
  const updateEdge = () => topbar.classList.toggle('is-scrolled', window.scrollY > 4);
  updateEdge();
  window.addEventListener('scroll', updateEdge, { passive: true });
}

// Fill the project bars once, when the board first scrolls into view.
const board = document.querySelector('.board');

if (board) {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        board.classList.add('is-live');
        observer.disconnect();
      }
    }, { threshold: .25 });
    observer.observe(board);
  } else {
    board.classList.add('is-live');
  }
}
