//metodo para armazenar valores = setItem
//metodo para resgatar valores = getItem
//metodo para remover valores = removeItem
//metodo para remover TODOS os valores = clear

//numeroJSON = JSON.parse(numero) = converte valor do local storage em número


//Exercício 01:

window.localStorage.setItem('numero', '0')
let resultadoNumero = document.getElementById('numeroAdicionar')

function converterNumero(){
    let numero = window.localStorage.getItem('numero')
    return numeroJSON = JSON.parse(numero)
}

function adicionarNumero(){
    numeroConvertido = converterNumero()
    numeroConvertido += 1
    resultadoNumero.innerHTML = numeroConvertido
    window.localStorage.setItem('numero', numeroConvertido)
}


//Exercício 02:

let resultadoTexto = document.getElementById('textoAdicionar')

function capturarTexto(){
    let valorTexto = document.getElementById('textoEnviado').value
    window.localStorage.setItem('texto', valorTexto)
    limparCaixaTexto()
}

function ResgatarTexto(){
    let texto = window.localStorage.getItem('texto')
    resultadoTexto.innerHTML = texto
}

function limparCaixaTexto(){
    textoEnviado.value = ''
}


//Exercício 03:

function limparValores(){
    //localStorage.clear()
    window.localStorage.removeItem('numero')
    window.localStorage.removeItem('texto')
    numeroJSON = 0
    resultadoNumero.innerHTML = ''
    resultadoTexto.innerHTML = ''
}