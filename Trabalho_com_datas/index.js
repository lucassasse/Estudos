function verificarData(){
    const valor = document.getElementById("date").value


    console.log(valor)

    dataAtual()
}

function dataAtual(){
    const data = new Date()
    const diaAtual = data.getDate()
    const mesAtual = data.getMonth()+1
    console.log(diaAtual)
    console.log(mesAtual)
}