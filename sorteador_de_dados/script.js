let resultado = document.getElementById('valor')
let dados = []

function gerarNumeros(){
    let resultado = Math.random() * (6 - 1) + 1
    valor = Math.round(resultado)
    dados.push(valor)
}

function quantidadeDados(valor){
    let caracter = parseInt(valor.value)
    limparArray()
    for(let i = caracter; i > 0; i--){
        gerarNumeros()
    }
    imprimir()
}

function imprimir(){
resultado.innerHTML = dados
}

function limparArray(){
    dados = []
}