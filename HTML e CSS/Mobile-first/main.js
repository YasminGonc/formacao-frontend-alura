const btnMenu = document.querySelector(".cabecalho__menu-menu-hamburguer");
const listaMenu = document.querySelector(".lista-menu");

btnMenu.addEventListener('click', () => {
    listaMenu.classList.toggle('on');
});

const btnMenuCategorias = document.querySelector(".opcoes__item-menu");
const listaMenuTablet = document.querySelector(".lista-menu-tablet");

btnMenuCategorias.addEventListener('click', () => {
    listaMenuTablet.classList.toggle('on');
});

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  });