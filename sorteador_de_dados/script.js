let resultado = document.getElementById('valor')
let listaImagens = document.querySelector('li')
let textoResultado = document.querySelector('p')
let dados = []
let imagens = [
    'Imagens/dado01.png',
    'Imagens/dado02.png',
    'Imagens/dado03.png',
    'Imagens/dado04.png',
    'Imagens/dado05.png',
    'Imagens/dado06.png',
]

function gerarNumeros(){
    let resultado = Math.random() * (6 - 1) + 1
    valor = Math.round(resultado)
    dados.push(valor)
}

function quantidadeDados(valor){
    limparArray()
    listaImagens.innerHTML = ''
    let caracter = parseInt(valor.value)
    for(let i = caracter; i > 0; i--){
        gerarNumeros()
    }
    imprimir()
}

function imprimir(){
    for(let i = 0; i < dados.length; i++){
        let resultadoFim = `<li style='list-style:none'><img src="${imagens[dados[i]-1]}" alt="imgDado"></li>`
        console.log(dados[i])
        let li = document.createElement('li')
        li.innerHTML = resultadoFim
        listaImagens.append(li)
    }
    verificaResultado()
}

function verificaResultado(){
    for(let i = 0; i < dados.length; i++){
        if(dados[i] !== dados[0]){
            textoResultado.innerHTML = `Lamento, você perdeu!`
            break
        } else{
            textoResultado.innerHTML = `Parabéns, você ganhou!`
        }
    }
}

function limparArray(){
    dados = []
}