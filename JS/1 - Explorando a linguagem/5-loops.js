const listaDeDestinos = new Array(
    "Salvador",
    "São Paulo",
    "Rio de Janeiro",
);

listaDeDestinos.push(`Curitiba`); //Adicionar um item na lista

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Goiânia";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

for (let cont = 0; cont < listaDeDestinos.length; cont++){
    if (listaDeDestinos[cont] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
    }
}
/*while (contador < listaDeDestinos.length){
    if (listaDeDestinos[contador] == destino) {
        console.log("Destino existe");
        destinoExiste = true;
        break;
    } 
    contador += 1;
} */
console.log(`Destino existe: ${destinoExiste}`);

if (podeComprar && destinoExiste) {
    console.log("Boa viagem");
} else {
    console.log("desculpe tivemos um erro");
}