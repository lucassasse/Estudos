var dados = []

function calculo(){
    var valor = Math.random() * (6 - 1) + 1
    valor = Math.round(valor)
    return valor
}

function pushArray(){
    dados.push(calculo())
}

function clearArray(){
    dados = []
}

function jogar2(){
    clearArray()
    for(var i = 0; i < 2; i++){
        calculo()
        pushArray()
    }
    alert(dados)
}

function jogar3(){
    clearArray()
    for(var i = 0; i < 3; i++){
        calculo()
        pushArray()
    }
}

function jogar4(){
    clearArray()
    for(var i = 0; i < 4; i++){
        calculo()
        pushArray()
    }
}

function jogar5(){
    clearArray()
    for(var i = 0; i < 5; i++){
        calculo()
        pushArray()
    }
}

function jogar6(){
    clearArray()
    for(var i = 0; i < 6; i++){
        calculo()
        pushArray()
    }
    alert(dados)
}