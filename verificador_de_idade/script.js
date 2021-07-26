function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtAno')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fGen = document.getElementsByName('radGen')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fGen[0].checked){
            genero = 'homem'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/hnenem.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/hjovem.png')
            } else if (idade < 60){
                img.setAttribute('src', 'imagens/hadulto.png')
            } else {
                img.setAttribute('src', 'imagens/hidoso.png')
            }
        } else if(fGen[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src', 'imagens/mnenem.png')
            } else if (idade < 21){
                img.setAttribute('src', 'imagens/mjovem.png')
            } else if (idade < 60){
                img.setAttribute('src', 'imagens/madulta.png')
            } else if (idade < 100){
                img.setAttribute('src', 'imagens/midosa.png')
            } else {
                img.setAttribute('src', 'imagens/rainha.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}