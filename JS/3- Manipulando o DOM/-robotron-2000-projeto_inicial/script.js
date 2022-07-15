let controle = document.querySelectorAll('.controle-ajuste');

controle.forEach((elemento) => { //forEach chama uma função para cada elemento dentro do array
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
    });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('.controle-contador');

    if (operacao == '-') {
        peca.value = Number(peca.value) - 1;
    } else {
        peca.value = Number(peca.value) + 1;
    }
}



