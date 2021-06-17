let resultado = document.getElementById('valor')
let listaImagens = document.querySelector('li')
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
    let caracter = parseInt(valor.value)
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

/*
listaImagens.innerHTML = ''
let resultado = `<li style='list-style:none'><img src="${dados[i]}" alt="imgDado"></li>`
let li = document.createElement('li')
li.innerHTML = resultado
listaImagens.append(li)
*/