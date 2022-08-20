const titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

const pacientes = document.querySelectorAll('.paciente');

function calculaImc(peso, altura) {
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) {
        return true;
    }
    else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura < 3) {
        return true;
    }
    else {
        return false;
    }
}

for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];

    const tdPeso = paciente.querySelector('.info-peso');
    const peso = tdPeso.textContent;
    const tdAltura = paciente.querySelector('.info-altura');
    const altura = tdAltura.textContent;

    const tdImc = paciente.querySelector('.info-imc');


    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if (!pesoValido) {
        pesoValido = false;
        tdImc.textContent = 'Peso inválido';
        paciente.classList.add('paciente-invalido');
    }

    if (!alturaValida) {
        alturaValida = false;
        tdImc.textContent = 'Altura inválida';
        paciente.classList.add('paciente-invalido');
    }

    if (alturaValida && pesoValido) {
        const imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}



