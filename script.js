// Refrigerante //

let precoRefrigerante = parseFloat(prompt("Digite o valor do Refrigerante"))
let quantidadeRefri= parseInt(prompt("Quantas unidades vai levar ?"))
let valorTotalrefri = (precoRefrigerante * quantidadeRefri)

alert(`Valor total a ser pago: ${valorTotalrefri}`)


                    // Macarrão //

let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão"))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades vai levar ?"))
let valorTotalmacarrao = (precoMacarrao * quantidadeMacarrao)

alert(`Valor total a ser pago: ${valorTotalmacarrao}`)


                     // Ervilha //

let precoErvilha = parseFloat(prompt("Digite o valor da Ervilha"))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades vai levar ?"))
let valorTotalervilha =	(precoErvilha * quantidadeErvilha)

alert(`Valor total a ser pago: ${valorTotalervilha}`)


                 //   Arroz  //

let precoArroz	= parseFloat(prompt("Digite o valor do Arroz"))
let quantidadeArroz = parseInt(prompt("Quantas Unidades vai levar ?"))
let valorTotalarroz	= (precoArroz * quantidadeArroz)

alert(`Valor total a ser pago: ${valorTotalarroz}`)


             //  Feijão //

 let precoFeijao  = parseFloat(prompt("Digite o valor do Feijão"))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades vai levar ?"))
let valorTotalfeijao = (precoFeijao * quantidadeFeijao)

alert(`Valor total a ser pago: ${valorTotalfeijao}`)


//  Vinho//
let precoVinho = parseFloat(prompt("E por ultimo digite o valor do Vinho"))
let quantidadeVinho = parseInt(prompt("Quantas Unidades vai levar ?"))
let valorTotalvinho = (precoVinho * quantidadeVinho)

alert(`Valor total a ser pago: ${valorTotalvinho}`)



let totalCompra = (valorTotalrefri + valorTotalmacarrao + valorTotalervilha + valorTotalarroz + valorTotalfeijao + valorTotalvinho)

if(totalCompra % 2 == 0) {
let vocePar = totalCompra / 2;


let amigoPar = totalCompra / 2 + valorTotalvinho;

console.log(`O total da compra é ${totalCompra} (Par)! Você pagará ${vocePar}. Seu amigo irá pagar ${amigoPar}.`);


}
else{
    let voceImpar = totalCompra / 2;

    let amigoImpar = totalCompra / 2;

    console.log(`O total da compra é ${totalCompra} (Impar)! Você pagará ${voceImpar}. Seu amigo irá pagar ${amigoImpar}.`);
}