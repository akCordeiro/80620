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

