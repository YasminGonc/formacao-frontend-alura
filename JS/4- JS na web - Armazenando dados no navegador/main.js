const form = document.querySelector('#novoItem'); //captura o formulário
const lista = document.querySelector('#lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];//acessar o local storage, caso esteja vazio criar um array vazio


itens.forEach((elemento) => {
    criaElemento(elemento);
});

form.addEventListener('submit', (evento) => {
    evento.preventDefault(); //prevenindo o comportamento padrão do evento

    const nome = evento.target.elements['nome'];//está pegando com o .target os valores colocados no input nome e quantidade, e usando esses valores como entrada da função criaElemento
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find(elemento => elemento.nome === nome.value);

    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    if(existe) { //ou seja, existe diferente de vazio
        itemAtual.id = existe.id; //está criando um novo item apenas se eu não tiver um listado 
        
        atualizaElemento(itemAtual);

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
    } else {
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]).id + 1 : 0;
        
        criaElemento(itemAtual); 

        itens.push(itemAtual);
    }

    localStorage.setItem('itens', JSON.stringify(itens));

    nome.value = ""; //limpa o nome
    quantidade.value = ""; //limpa a quantidade
});

function criaElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += item.nome;
    novoItem.appendChild(botaoDeleta(item.id));

    lista.appendChild(novoItem);
}
function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
}
function botaoDeleta(id) {
    const elementoBotao = document.createElement('button');
    elementoBotao.innerText = 'X';

    elementoBotao.addEventListener('click', function() {
        deletaElemento(this.parentNode, id);
    })

    return elementoBotao;
}
function deletaElemento(tag, id) {
    tag.remove();

    itens.splice(itens.findIndex(elemento => elemento.id == id), 1);

    localStorage.setItem('itens', JSON.stringify(itens));
}