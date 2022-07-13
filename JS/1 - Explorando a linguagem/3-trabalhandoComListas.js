/*console.log(`Trabalhando com listas`);
const salvador = "Salvador";
const saoPaulo = "São Paulo";
const rioDeJaneiro = "Rio de Janeiro";
console.log(`Destinos possíveis: ${salvador}, ${saoPaulo}`);*/

const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

listaDeDestinos.push(`Curitiba`); //Adicionar um item na lista

console.log(listaDeDestinos);
console.log(listaDeDestinos[0]);

listaDeDestinos.splice(1,1);

console.log(listaDeDestinos);
