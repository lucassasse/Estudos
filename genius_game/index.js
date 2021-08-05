campoVerde = document.querySelector('#verde');
campoVermelho = document.querySelector('#vermelho');
campoAmarelo = document.querySelector('#amarelo');
campoAzul = document.querySelector('#azul');

const campoCor = [campoVerde, campoVermelho, campoAmarelo, campoAzul];

let jogoAtual = [];
let tentativa = [];
let contador = 0;

function sortearCor(){
    jogoAtual.push(Math.floor(Math.random() * 4));
    console.log(jogoAtual);
}

function play(){
    contador ++;
    console.log(contador)
    sortearCor();
}