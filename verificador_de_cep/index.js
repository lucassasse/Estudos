let inputCEP = document.getElementById("inputCEP");
let outputRua = document.getElementById("rua");
let outputBairro = document.getElementById("bairro");
let outputCidade = document.getElementById("cidade");
let outputEstado = document.getElementById("estado");
let enderecoCompleto;

inputCEP.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        consultarCEP();
    }
})

function consultarCEP(){
    let url = `https://viacep.com.br/ws/${inputCEP.value}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => atribuirCampos(data))
        .catch(() => { alert("Ops, alguma coisa estranha aconteceu. Tente novamente!") })
        
    inputCEP.value = "";
    inputCEP.focus();
}

function atribuirCampos(data){
    outputRua.value = data.logradouro;
    outputBairro.value = data.bairro;
    outputCidade.value = data.localidade;
    outputEstado.value = data.uf;
}