let livros = [];

async function getBuscarLivrosAPI() {
    const res = await fetch('https://guilhermeonrails.github.io/casadocodigo/livros.json');
    livros = await res.json();
    let livrosComDesconto = aplicarDescontos(livros);
    exibirLivrosNaTela(livrosComDesconto);
}

getBuscarLivrosAPI();