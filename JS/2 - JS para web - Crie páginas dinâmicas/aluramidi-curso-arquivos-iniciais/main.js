function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1]; //cria o nome do id dinamicamente pq todas elas terminam com o nome da classe do button
    const idAudio = `#som_${instrumento}`;

    listaDeTeclas[i].onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) { //função anônima
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.toggle('ativa');
        }
    }

    tecla.onkeyup = function (evento) { //função anônima
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.toggle('ativa');
        }
    }
}
