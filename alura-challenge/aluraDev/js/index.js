//Cor container
const divEditor = document.querySelector('.editor');
const cor = document.querySelector('#cor');

cor.addEventListener('change', () => {
    divEditor.style.background = cor.value;
});

//Highlight
const btnHighlight = document.querySelector('#btn-highlight');
const linguagem = document.querySelector('#linguagem');
const areaCodigo = document.querySelector('.codigo-wrapper');

function aplicaHighlight() {
    const codigo = areaCodigo.innerText;
    areaCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`;
    areaCodigo.querySelector('code').textContent = codigo;
    hljs.highlightElement(areaCodigo.querySelector('code'));
}

btnHighlight.addEventListener('click', () => {
    aplicaHighlight();
});

//Salvar dados do form no localStorage
const form = document.querySelector('form');
const tituloProj = document.querySelector('#titulo-proj');
const descricaoProj = document.querySelector('#descricao-proj');
const projeto = JSON.parse(localStorage.getItem('projeto')) || [];

form.addEventListener('submit', (evento) => {
    //evento.preventDefault();
    
    const novoProjeto = {
        'titulo': tituloProj.value,
        'descricao': descricaoProj.value,
        'linguagem': linguagem.value,
        'cor': cor.value
    }

    projeto.push(novoProjeto);

    /*tituloProj.value = '';
    descricaoProj.value = '';
    linguagem.value = '';
    cor.value = '#96B9FD';*/

    localStorage.setItem('projeto', JSON.stringify(projeto));

    //console.log(projeto);
});

