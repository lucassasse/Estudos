function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 5 && hora < 12){
        // Bom dia
        img.src = `imagens/fotomanha.png`
        document.body.style.background = '#8ec0a4'
    } else if (hora <= 18){
        //Boa tarde
        img.src = `imagens/fototarde.png`
        document.body.style.background = '#a58525'
    } else {
        //Boa noite
        img.src = `imagens/fotonoite.png`
        document.body.style.background = '#0d2b52'
    }
}

