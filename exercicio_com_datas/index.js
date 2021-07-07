let campoData = document.getElementById("date")
resultado = document.getElementById('resultado')

let dataAtual = new Date()
let diaAtual = dataAtual.getDate()
let mesAtual = dataAtual.getMonth()+1

function verificarData(){
    valorData = campoData.value
    let valorDataData = new Date(valorData)

    let diaData = valorDataData.getDate()
    let mesData = valorDataData.getMonth()+1

    resultado.innerHTML = `Você nasceu no ${diaData} e ${mesData}`
    console.log(valorData)
    console.log(dataAtual)
}