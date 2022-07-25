const toggleBtn = document.querySelector('.btns');
const menu = document.querySelector('.btn__menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});