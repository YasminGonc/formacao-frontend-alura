const dataProximaRevisao = document.querySelectorAll('.info-proximaRevisao');

const hoje = new Date();

for (let i = 0; i < dataProximaRevisao.length; i++) {
    const dataRevisao = new Date(dataProximaRevisao[i].textContent);
    const segundos = (dataRevisao - hoje)/1000;
    const horas = segundos/3600;
    const dias = Math.floor(horas/24);

    if (dias < 10) {
        dataProximaRevisao[i].style.backgroundColor = '#FF0F0F';
    } else if (dias < 15) {
        dataProximaRevisao[i].style.backgroundColor = '#FFFA00';
    } else {
        dataProximaRevisao[i].style.backgroundColor = '#31FF4E';
    }
    console.log(dias);
}

