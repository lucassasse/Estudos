let campoVerde = document.getElementById('verde');
let campoVermelho = document.getElementById('vermelho');
let campoAzul = document.getElementById('azul');
let campoAmarelo = document.getElementById('amarelo');
let campoPontuacao = document.getElementById('pontuacao');

//const campoCor = [campoVerde, campoVermelho, campoAmarelo, campoAzul];

let jogoAtual = [];
let tentativa = [];
let contador = 0;
let resultadoTeste = 'false'

function play(){
    if(tentativa.length < jogoAtual.length){
        alert("Primeiro tente adivinhar a sequência!\nForça, você está no caminho certo!")
    } else {
        contador ++;
        sortearCor();
        pontuacao();
    }
}

function sortearCor(){
    jogoAtual.push(Math.floor(Math.random() * 1));
    console.log(jogoAtual);
    
    setTimeout(() => {
        chamaPiscar();
    },300)
}

let pos = 0;
function chamaPiscar(){
    piscar(pos);

    setTimeout(() => {
        if(jogoAtual.length > pos){
            chamaPiscar(pos);
            pos++;
        } else{
            pos = 0;
        }
    }, 600)
}

async function piscar(pos){

    if(jogoAtual[pos] === 0){
        campoVerde.classList.add('pisca');
    } else if(jogoAtual[pos] === 1){
        campoVermelho.classList.add('pisca');
    } else if(jogoAtual[pos] === 2){
        campoAzul.classList.add('pisca');
    } else{
        campoAmarelo.classList.add('pisca');
    }

    await setTimeout(() => {
        if(jogoAtual[pos] === 0){
            campoVerde.classList.remove('pisca');
        } else if(jogoAtual[pos] === 1){
            campoVermelho.classList.remove('pisca');
        } else if(jogoAtual[pos] === 2){
            campoAzul.classList.remove('pisca');
        } else{
            campoAmarelo.classList.remove('pisca');
        }
    }, 600)
}

function selecionarCor(valor){
    if(jogoAtual.length <= tentativa.length){
        alert("Que tal tentar iniciar o jogo primeiro?");
    } else{
        tentativa.push(parseInt(valor.value));
        if(jogoAtual.length === tentativa.length){
            resultadoTeste = tentativa.join() === jogoAtual.join();
            verificarTentativa();
        }
    }  
}

function verificarTentativa(){ //Verifica somente após clicar em todos (implementar verificar clique a clique);
    resultadoTeste ? play() : resetar();
    tentativa = [];
    console.log(jogoAtual);
}

function resetar(){
    jogoAtual = [];
    tentativa = [];
    contador = 0;
    alert("Lamento, você perdeu!");
}

function pontuacao(){
    campoPontuacao.innerHTML = "Pontuação: " + (contador-1);
}