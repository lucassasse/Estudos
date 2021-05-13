/*var primeiroValor = parseFloat(prompt("Digite o primeiro valor:"))

var operacao = prompt("digite a sua operação: ")

var segundoValor = parseFloat(prompt("Digite o segundo valor:"))

if(operacao == "adicao"){
    var resultado = primeiroValor + segundoValor
} else if(operacao == "-"){
    var resultado = primeiroValor - segundoValor
} else if(operacao == "*" || operacao == "x"){
    var resultado = primeiroValor * segundoValor
} else if(operacao == "/"){
    var resultado = primeiroValor / segundoValor
} else{
    document.write("<h2>" + "Operação inválida" + "</h2>")
}

document.write("<h2>" + primeiroValor + " " + operacao + " " + segundoValor + " = " + resultado + "</h2>")

Poderia/ deveria colocar o resultado dentro de cada condicional - if*/


function calcularResultado(){
var operacao = document.getElementById("funcao").value
    if(operacao == "+"){
        var valor = parseFloat(document.getElementById("iptPrimeiroValor").value) + parseFloat(document.getElementById("iptSegundoValor").value)
    } else if(operacao == "-"){
        var valor = parseFloat(document.getElementById("iptPrimeiroValor").value) - parseFloat(document.getElementById("iptSegundoValor").value)
    } else if(operacao == "*" || operacao == "x"){
        var valor = parseFloat(document.getElementById("iptPrimeiroValor").value) * parseFloat(document.getElementById("iptSegundoValor").value)
    } else if(operacao == "/"){
        var valor = parseFloat(document.getElementById("iptPrimeiroValor").value) / parseFloat(document.getElementById("iptSegundoValor").value)
    }/* else{
        document.write("<h2>" + "Operação inválida" + "</h2>")
    }*/
    return valor.toFixed(2);
}

function apresentarResultado(resultado){
    var elementoH2 = document.getElementById("resultado");
      elementoH2.style.visibility="";
      elementoH2.innerHTML = resultado;
}

function cliqueBotao(){
    var valor = calcularResultado();
    apresentarResultado(valor);
}