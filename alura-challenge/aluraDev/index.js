const btnHighlight = document.querySelector('#btn-highlight');
const divEditor = document.querySelector('.editor');
const cor = document.querySelector('#cor');

btnHighlight.addEventListener('click', () => {
    divEditor.style.background = cor.value;
});