const drawerButtonElement = document.querySelector('.drawer');
const navDropElement = document.querySelector('.nav-drop');

const mainElement = document.querySelector('body');
 
drawerButtonElement.addEventListener('click', event => {
  navDropElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', event => {
    navDropElement.classList.remove('open');
    event.stopPropagation();
  });