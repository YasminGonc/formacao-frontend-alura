var btnAbrir = document.querySelector('[data-show]');
var btnFechar = document.querySelector('[data-hide]');
var lista = document.querySelector('.lista');

btnAbrir.addEventListener('click', () => {
    lista.classList.add('on');
    btnFechar.classList.add('on');
});

btnFechar.addEventListener('click', () => {
    lista.classList.remove('on');
    btnFechar.classList.remove('on');
});