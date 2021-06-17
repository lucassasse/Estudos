let lista = document.querySelector('#ul li')

function captar() {
  let num1 = document.getElementById('iptNumero1').value
  return num1
}

function calcular(){
  lista.innerHTML = ''
  for(let i = 1; i <= 10;i++){
    imprimirResultado(i)
  }
}

function imprimirResultado(i){
  let numero = captar()
  let resultado = i * numero
  let template = `${i} x ${numero} = ${resultado}`
  let li = document.createElement('li')
  li.innerHTML = template
  lista.append(li)
}