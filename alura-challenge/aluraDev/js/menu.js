//Menu
const btnMobile = document.querySelector('.btn-menu-mobile');
const menuMobile = document.querySelector('.menu-mobile');

const btnLupa = document.querySelector('#lupa');
const busca = document.querySelector('#search');

btnMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('on');
});

btnLupa.addEventListener('click', () => {
    busca.classList.toggle('on');
});