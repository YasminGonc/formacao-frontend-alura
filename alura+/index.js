const linguagem = document.querySelector('.linguagem');
const areaCodigo = document.querySelector('.codigo-wrapper');
const botao = document.querySelector('.botao');

function aplicaHighlight() {
    const codigo = areaCodigo.innerText;
    areaCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`;
    areaCodigo.querySelector('code').textContent = codigo;
    hljs.highlightElement(areaCodigo.querySelector('code'));
}

botao.addEventListener('click', () => {
    aplicaHighlight();
});

//identificar a linguagem
//onde o código está (área do código)
//botão funcional