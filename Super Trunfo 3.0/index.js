var CartaEduardo = {
    nome: "Fiat UNO, do Eduardo",
    imagem: "https://www.autoentusiastas.com.br/ae/wp-content/uploads/2016/12/dea02d-GTA5-2016-08-28-17-25-48-602.jpg",
    atributos: {
        ataque: 80,
        defesa: 75,
        magia: 50
    }
}

var CartaLucas = {
    nome: "Cereca, do Lucas",
    imagem: "https://blogdomiltonjung.files.wordpress.com/2010/02/careca_careca.jpg?w=640",
    atributos: {
        ataque: 50,
        defesa: 20,
        magia: 90,
    }
}

var CartaMarcio = {
    nome: "Marcio, o Grandão",
    imagem: "https://i.ytimg.com/vi/ydrE0A97pvs/hqdefault.jpg",
    atributos: {
        ataque: 90,
        defesa: 90,
        magia: 10,
    }
}

var CartaGuilherme = {
    nome: "Guilherme, o Poliglota",
    imagem: "https://segredosdomundo.r7.com/wp-content/uploads/2019/10/poliglota-o-que-e-como-funciona-6-famosos-poliglotas-9.jpg",
    atributos: {
        ataque: 75,
        defesa: 75,
        magia: 80,
    }
}

var CartaAdvogado = {
    nome: "Advogado",
    imagem: "https://thumbs.jusbr.com/imgs.jusbr.com/publications/artigos/images/advogado1485516381.jpg",
    atributos: {
        ataque: 85,
        defesa: 95,
        magia: 0,
    }
}

var CartaProgramador = {
    nome: "Programador",
    imagem: "https://cio.com.br/wp-content/uploads/2017/08/programador.jpg",
    atributos: {
        ataque: 80,
        defesa: 30,
        magia: 95,
    }
}

var CartaEngenheiroEletrico = {
    nome: "Engenheiro Elétrico",
    imagem: "https://lh3.googleusercontent.com/proxy/NB1O5F67fdc5ChjBmJ1bh7TuBDMVivCNWGnLFsxFLvnOQTaVmzu8J3c67F9h6fs3EGqUw3Rb86BYl_OxLwm3ySubaYlP6HCZb3pJeTr_dyDi84X2q1S7_dEVk_D-zrYMSVP_jQo",
    atributos: {
        ataque: 90,
        defesa: 30,
        magia: 40,
    }
}

var CartaRetificador = {
    nome: "Retificador",
    imagem: "https://i.ytimg.com/vi/Mr2qu2h0IbY/mqdefault.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 20,
    }
}

var cartaMaquina
var cartaJogador
var cartas = [CartaEduardo, CartaLucas, CartaMarcio, CartaGuilherme, CartaAdvogado, CartaProgramador, CartaEngenheiroEletrico, CartaRetificador]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeDeCartas()

function atualizaQuantidadeDeCartas(){
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + cartas.length

    divQuantidadeCartas.innerHTML = html
}

function atualizaPlacar(){
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = html
}

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    
    divCartaJogador.style.backgroundImage=`url(${cartaJogador.imagem})`

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for(var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
}

function jogar(){
    var divResultado = document.getElementById("resultado")
    var atributoSelicionado = obtemAtributoSelecionado()

    if(cartaJogador.atributos[atributoSelicionado] > cartaMaquina.atributos[atributoSelicionado]){
        htmlResultado = '<p class="resultado-final">Você venceu!</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelicionado] < cartaMaquina.atributos[atributoSelicionado]){
        htmlResultado = '<p class="resultado-final">Você perdeu!</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou!</p>'
    }

    if (cartas.length == 0){
        alert("Fim de jogo")
        if (pontosJogador > pontosMaquina){
            htmlResultado = '<p class="resultado-final"> Você venceu!</p>'
        } else if (pontosJogador < pontosMaquina) {
            htmlResultado = '<p class="resultado-final"> Você perdeu!</p>'
        } else {
            htmlResultado = '<p class="resultado-final"> Empatou!</p>'
        }
    } else {
        document.getElementById("btnProximaRodada"). disabled = false
    }

    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true

    atualizaPlacar()
    exibirCartaMaquina()
    atualizaQuantidadeDeCartas()
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos){
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
    var divCartas = document.getElementById('cartas')

    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
    document.getElementById("btnSortear").disabled = false
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnProximaRodada").disabled = true

    var divResultado = document.getElementById("resultado")
    divResultado.innerHTML = ""
}