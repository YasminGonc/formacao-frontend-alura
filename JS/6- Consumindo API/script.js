let cep = document.querySelector('#cep');

cep.addEventListener('focusout', () => buscaEndereco(cep.value));

async function buscaEndereco(cep) {
    let mensagemErro = document.querySelector('#erro');
    mensagemErro.innerHTML = "";
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        let consultaCepConvertida = await consultaCEP.json();
        if (consultaCepConvertida.erro) {
            throw Error('CEP não existente');
        }
        let cidade = document.querySelector('#cidade');
        let logradouro = document.querySelector('#endereco');
        let estado = document. querySelector('#estado');

        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;

        return consultaCepConvertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`;
    }
}
