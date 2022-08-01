const btnMenu = document.querySelector(".cabecalho__menu-menu-hamburguer");
const listaMenu = document.querySelector(".lista-menu");

btnMenu.addEventListener('click', () => {
    listaMenu.classList.toggle('on');
});

const swiper = new Swiper('.swiper', {
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
  });