/*
now = new Date

var getDay = now.getDay()//captura o dia da semana. 0 = domingo (0 a 7 = array)
var getDate = now.getDate() //captura o dia atual
var getMouth = now.getMonth()//captura o mês atual. 0 = janeiro (0 a 12 = array)
var getFullYear = now.getFullYear()//captura o ano atual

document.getElementById("txt").innerHTML = getDay + " " + getDate + " "  + getMouth + " " + getFullYear
*/


var valor = document.getElementById("date").value

function VerificarEstacao(){
    console.log(valor)
}