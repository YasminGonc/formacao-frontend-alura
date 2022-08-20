const botaoBuscar = document.querySelector('#buscar-pacientes');

botaoBuscar.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('Get', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function() {
        const resposta = xhr.responseText;
        const pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        })
    });

    xhr.send();
});