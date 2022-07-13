const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

listaDeDestinos.push(`Curitiba`); //Adicionar um item na lista

const idadeComprador = 15;
const estaAcompanhada = true;

if (idadeComprador >= 18) {
    listaDeDestinos.splice(1, 1);
    console.log("Comprador maior de idade");
} else if (estaAcompanhada) { //se a variável é booleana não preciso colocar o comparador 
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador não é maior de idade, não posso vender");
}


console.log(listaDeDestinos);


