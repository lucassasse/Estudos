var numeros = [0, 0, 0]
var dinheiro = 250
var fichas = 10

var listaImagens = document.querySelectorAll('.img')

var imagens = [
'imagens/imgBar.png',
'imagens/imgCereja.png',
'imagens/imgSete.png',
]

atualizarFichas(0)
atualizarDinheiro(0)

function SortearNumeros(){
    var numeroSorteado
    for (var i = 0; i < 3; i++){
        numeroSorteado = parseInt(Math.random() * 3)
        numeros[i] = numeroSorteado
    }
    verificacaoResultado()
}

function verificacaoResultado(){
    var resultado
    if (numeros[0] == numeros[1] && numeros[0] == numeros[2]){
        alert("Parabéns, você ganhou!")
        atualizarFichas(10)
    }
    return resultado
}

function imprimirImg(){
    for (var i = 0; i < numeros.length; i++){
        listaImagens[i].src = imagens[numeros[i]]
    }
}

function cliqueBotao(){
    if (fichas > 0) {
        atualizarFichas(-1)
        SortearNumeros()
        imprimirImg()
    } else {
        alert("Suas Fichas acabaram.\nCompre mais para poder continuar jogando!")
    }
}

function atualizarFichas(valor){
    fichas += valor
    var elemento = document.getElementById("fichas")
    elemento.innerHTML = "Quantidade de Fichas: " + fichas
}

function atualizarDinheiro(valor){
    dinheiro += valor
    var elemento = document.getElementById("saldo")
    elemento.innerHTML = "Seu saldo é de R$: " + dinheiro + ",00"
}

function comprarFichas(dinheiroLoja, fichasLoja){
    if (dinheiro >= dinheiroLoja) {
        atualizarFichas(fichasLoja)
        atualizarDinheiro(-dinheiroLoja)
    } else (
        alert("Saldo insuficiente")
    )
}

function trocarFichas(dinheiroLoja, fichasLoja){
    if (fichas >= fichasLoja && fichas > 0) {
        atualizarFichas(-fichasLoja)
        atualizarDinheiro(dinheiroLoja)
    } else (
        alert("Saldo insuficiente")
    )
}