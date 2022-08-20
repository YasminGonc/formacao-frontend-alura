const campoFiltro = document.querySelector('#filtrar-tabela');

campoFiltro.addEventListener('input', function () {
    const pacientes = document.querySelectorAll('.paciente');

    if (this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            const paciente = pacientes[i];
            const tdNome = paciente.querySelector('.info-nome');
            const nome = tdNome.textContent;
            const expressao = new RegExp(this.value, 'i');

            if (expressao.test(nome)) {
                paciente.classList.remove('invisivel');
            }
            else {
                paciente.classList.add('invisivel');
            }
        }
    }
    else {
        for (let j = 0; j < pacientes.length; j++) {
            const paciente = pacientes[j];
            paciente.classList.remove('invisivel');
        }
    }

});