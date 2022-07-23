const divEditor = document.querySelector('.editor');
const cor = document.querySelector('#cor');

cor.addEventListener('change', () => {
    divEditor.style.background = cor.value;
});

const btnHighlight = document.querySelector('#btn-highlight');
const linguagem = document.querySelector('#linguagem');
const areaCodigo = document.querySelector('.codigo-wrapper');

function aplicaHighlight() {
    const codigo = areaCodigo.innerText;
    areaCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`;
    areaCodigo.querySelector('code').textContent = codigo;
    hljs.highlightElement(areaCodigo.querySelector('code'));
}


const form = document.querySelector('form');
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
});

btnHighlight.addEventListener('click', () => {
    aplicaHighlight();
});