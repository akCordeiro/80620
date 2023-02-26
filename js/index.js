const checkScreenWidth = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 600) {
    document.querySelector('nav ul').classList.add('collapsed');
  } else {
    document.querySelector('nav ul').classList.remove('collapsed');
  }
};
checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);

const links = document.querySelectorAll('nav a');
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
