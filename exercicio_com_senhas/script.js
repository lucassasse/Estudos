//Estudo com inputs type="password"

var senha01

function capturarSenha(){
  senha01 = document.getElementById('cadastroSenha').value
  document.getElementById('cadastroSenha').value = ''
}

function testarSenha(){
  var teste = document.getElementById('testeSenha').value
  if (teste === senha01){
    alert('Senha correta!')
  } else {
    alert('Senha incorreta.')
  }
  document.getElementById('testeSenha').value = ''
}

//Estudo com inputs type="button"

var senha = []
var senhaSalva = []
var senha2 = []
var senhaZerada = []
var exibir = document.getElementById('otpText01')
var exibir2 = document.getElementById('otpText02')
var resultadoTeste = 'false'

function numero(valor){
  let caracter = parseInt(valor.value)
  senha.push(caracter)
  exibirSenha()
}

function exibirSenha(){
  exibir.innerHTML = `<p id='iptText'>${senha.join('')}</p>`
}

function limparSenha(){
  senha = []
  senhaSalva = []
  exibir.innerHTML = `<p id='otpText'>*****</p>`
}

function cadastrarSenha(){
  alert('Senha cadastrada')
  senhaSalva = senha
  senha = []
  exibir.innerHTML = `<p id='iptText'>*****</p>`
}

function numero2(valor){
  let caracter = parseInt(valor.value)
  senha2.push(caracter)
  exibirSenha2()
}

function limparSenha2(){
  senha2 = []
  exibir2.innerHTML = `<p id='otpText02'>*****</p>`
}

function testarSenha2(){
  if (senhaSalva.join() === senhaZerada.join()){
    alert('Por favor, cadastre uma senha!')
  } else{
    resultadoTeste = senhaSalva.join() === senha2.join()
    apresentarResultado()
  }
}

function apresentarResultado(){
  var alertaTxt = resultadoTeste ? 'Senha correta!' : 'Senha incorreta.'
  alert(alertaTxt)
  limparSenha2()
}

function exibirSenha2(){
  exibir2.innerHTML = `<p id='otpText02'>${senha2.join('')}</p>`
}