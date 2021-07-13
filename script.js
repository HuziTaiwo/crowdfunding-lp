const navigationbar = document.querySelector('nav');
const burgerIcon = document.querySelector('.toggle');

burgerIcon.addEventListener('click', () => {
   navigationbar.classList.toggle('active'); 
});