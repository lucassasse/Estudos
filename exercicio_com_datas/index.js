let campoData = document.getElementById("date")
resultado = document.getElementById('resultado')

let dataAtual = new Date()
const diaAtual = dataAtual.getDate()
const mesAtual = dataAtual.getMonth()+1


function verificarData(){
    valorData = campoData.value



    resultado.innerHTML = `Você nasceu no ${dataAtual}`
    console.log(valorData)
}