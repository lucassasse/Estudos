function obterNumero(){
    var numero = document.getElementById('txtNumero')
    var valor = Number(numero.value)
    return valor
}

function calcular(valor){
    valor = obterNumero()
    var result
    for(var i = 0; i <= 10; i++){
        var result = valor * i
        txtArea.innerHTML = `${valor} * ${i} = ${result}`
    }
}