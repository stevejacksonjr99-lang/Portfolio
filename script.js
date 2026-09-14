const cursor = document.querySelector('.cursor-dot');

document.querySelectorAll('.site-footer span:first-child').forEach((label) => {
  label.textContent = 'Giifted Hands Made This';
});

document.querySelectorAll('.site-footer span:nth-child(2)').forEach((label) => {
  label.remove();
});

document.querySelectorAll('.menu-link span').forEach((label) => {
  label.textContent = 'Schedule Surgery';
});

window.addEventListener('mousemove', (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

const revealItems = document.querySelectorAll('.story-content, .skills-content, .project, .contact-info, .contact-orbit');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => {
  item.classList.add('reveal');
  revealObserver.observe(item);
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.add('navigated');
  });
});