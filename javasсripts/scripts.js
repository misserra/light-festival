document.addEventListener('DOMContentLoaded', function() {
  const scrollDown = document.querySelector('.scroll-down');
  
  if (scrollDown) {
    scrollDown.addEventListener('click', function() {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    });
  } else {
    console.error('Элемент .scroll-down не найден');
  }
  const burgerIcon = document.getElementById('burgerIcon');
  const menuLinks = document.getElementById('menuLinks');
  const menuContainer = document.querySelector('.menu-container');
  
  burgerIcon.addEventListener('click', function() {
    menuContainer.classList.toggle('menu-open');
  });
  
  menuLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
      menuContainer.classList.remove('menu-open');
    });
  });
  
});

