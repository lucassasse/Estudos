/*function obterNumero(){
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
}*/

var lista = document.querySelector('#ul li')

function captar() {
  var num1 = document.getElementById('iptNumero1').value
  return num1
}

function calcular(){
  lista.innerHTML = ''
  var numero = captar()
  var num2 = 0
  for(var i = 1; i <= 10;i++){
    var resultado = i * numero
    
    var template = `${i} x ${numero} = ${resultado}`
    var li= document.createElement('li')
    li.innerHTML = template
    lista.append(li)
  }
}