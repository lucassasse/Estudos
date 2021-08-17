let campoVerde = document.getElementById("verde");
let campoVermelho = document.getElementById("vermelho");
let campoAzul = document.getElementById("azul");
let campoAmarelo = document.getElementById("amarelo");
let campoPontuacao = document.getElementById("pontuacao");

let jogoAtual = [];
let tentativa = [];
let contador = 0;
let resultadoTeste = "false";

const valoresCampo = {
  0: campoVerde,
  1: campoVermelho,
  2: campoAzul,
  3: campoAmarelo,
};

function play() {
  if (tentativa.length < jogoAtual.length) {
    alert(
      "Primeiro tente adivinhar a sequência!\nForça, você está no caminho certo!"
    );
  } else {
    contador++;
    sortearCor();
    pontuacao();
  }
}

function sortearCor() {
  jogoAtual.push(Math.floor(Math.random() * 4));
  console.log(jogoAtual);

  setTimeout(() => {
    chamaPiscar(0);
  }, 300);
}

function chamaPiscar(pos) {
  piscar(pos);

  setTimeout(() => {
    if (jogoAtual.length - 1 > pos) {
      chamaPiscar(pos + 1);
    }
  }, 800);
}

function piscar(pos) {
  valoresCampo[jogoAtual[pos]].classList.add("pisca");

  setTimeout(() => {
    valoresCampo[jogoAtual[pos]].classList.remove("pisca");
  }, 600);
}

function selecionarCor(valor) {
  if (jogoAtual.length <= tentativa.length) {
    alert("Que tal tentar iniciar o jogo primeiro?");
  } else {
    tentativa.push(parseInt(valor.value));
    if (jogoAtual.length === tentativa.length) {
      resultadoTeste = tentativa.join() === jogoAtual.join();
      verificarTentativa();
    }
  }
}

function verificarTentativa() {
  //Verifica somente após clicar em todos (implementar verificar clique a clique);
  resultadoTeste ? play() : resetar();
  tentativa = [];
  console.log(jogoAtual);
}

function resetar() {
  jogoAtual = [];
  tentativa = [];
  contador = 0;
  alert("Lamento, você perdeu!");
}

function pontuacao() {
  campoPontuacao.innerHTML = "Pontuação: " + (contador - 1);
}
