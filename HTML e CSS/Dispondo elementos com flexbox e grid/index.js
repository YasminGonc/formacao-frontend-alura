const menuCabecalho = document.querySelector('.cabecalho-menu');
const menuMobile = document.querySelector('.menu-lateral');

menuCabecalho.addEventListener('click', () => {
    menuMobile.classList.toggle('on');
});