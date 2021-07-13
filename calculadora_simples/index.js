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
    }
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