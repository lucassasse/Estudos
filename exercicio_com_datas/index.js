const campoData = document.getElementById("date")

function verificarData(){
    valorData = campoData.value

    dataAtual()
}

function dataAtual(){
    const data = new Date()
    const diaAtual = data.getDate()
    const mesAtual = data.getMonth()+1
    console.log(diaAtual)
    console.log(mesAtual)
}



/*
var resposta = document.getElementById('resposta');
let dia;
let mes;
let estacao;

function captarValores(){
    dia = document.getElementById('dia').value;
    mes = document.getElementById('mes').value;
    verificarData();
}

function verificarData(){
    if(dia < 1 || dia > 31 || mes < 1 || mes > 12){
        alert('Digite uma data válida...');
    }
    else if(mes == 1 || mes == 2){
        estacao = "Verão"
    } else if(mes == 3){
        if(dia < 20){
            estacao = "Verão"
        } else{
            estacao = "Outono"
        }
    } else if(mes == 4 || mes == 5){
        estacao = "Outono"
    } else if(mes == 6){
        if(dia < 20){
            estacao = "Outono"
        } else{
            estacao = "Inverno"
        }
    } else if(mes == 7 || mes == 8){
        estacao = "Inverno"
    } else if(mes == 9){
        if(dia < 21){
            estacao = "Inverno"
        } else{
            estacao = "Primavera"
        }
    } else if(mes == 10 || mes == 11){
        estacao = "Primavera"
    } else{
        estacao = "Primavera"
    }
    alert(estacao)
}