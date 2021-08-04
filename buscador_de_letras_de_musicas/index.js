//.then

/* const artista = document.querySelector("#inputArtista");
const musica = document.querySelector("#inputMusica");
const letra = document.querySelector("#letra");

function buscarLetra(){
    let url = `https://api.vagalume.com.br/search.php?art=${artista.value}&mus=${musica.value}&apikey={key}`;

    fetch(url)
        .then(response => { return response.json() })
        .then(data => atribuirCampos(data))
        .catch(() => { alert("Ops, alguma coisa estranha aconteceu. Tente novamente!") })
}

function atribuirCampos(data){
    letra.innerHTML = data.mus[0].text;
} */

//async e await

const artista = document.querySelector("#inputArtista");
const musica = document.querySelector("#inputMusica");
const letra = document.querySelector("#letra");

function buscarLetra(artista, musica){
    return fetch(`https://api.vagalume.com.br/search.php?art=${artista}&mus=${musica}&apikey={key}`);
}

async function buscarLetra(){
    letra.innerHTML = `<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>`
    
    try {
        const musicaResposta = await buscarLetra(artista.value, musica.value);
        const data = await musicaResposta.json();
        if(data.mus[0].text){
            letra.innerHTML = data.mus[0].text;
        } else{
            letra.innerHTML = data.error;
        }
    } catch (err){
        console.log(err);
    }
}