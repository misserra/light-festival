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
});