var url = "https://api-pokemon-mendes.herokuapp.com/api/pokemon/buscar"
var response
var corDeFundoTipo
var primeiroPokemon

primeiroPokemon = sessionStorage.getItem('pokemon')

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "nomePokemon": primeiroPokemon,
    "idPokemon": ""
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch(url, requestOptions)
    .then(response => response.text())
    .then(result => {
        response = JSON.parse(result)
        numeroPokemon.textContent = ("#" + response.id)
        nomePokemon.textContent = (response.nome)
        tipoPokemon.textContent = (response.tipo)
        const cartaoPokemon = document.getElementById('cartao-aberto')
        corDeFundoTipo = 'tipo-' + (response.tipoCard)
        cartaoPokemon.classList.add(corDeFundoTipo)
        img.setAttribute('src', (response.imagem))
        biografia.textContent = (response.biografia)
    })
    .catch(error => console.log('error', error));



function buscarPokemon() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var pesquisa = document.getElementById("buscarPokemon").value

    if (isNaN(pesquisa)) {
        var raw = JSON.stringify({
            "nomePokemon": pesquisa,
            "idPokemon": ""
        });
    } else {
        var raw = JSON.stringify({
            "nomePokemon": "",
            "idPokemon": pesquisa
        });
    }

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            response = JSON.parse(result)
            numeroPokemon.textContent = ("#" + response.id)
            nomePokemon.textContent = (response.nome)
            sessionStorage.setItem('pokemon', response.nome)
            tipoPokemon.textContent = (response.tipo)
            document.getElementById("cartao-aberto").classList.remove(corDeFundoTipo)
            const cartaoPokemon = document.getElementById('cartao-aberto')
            corDeFundoTipo = 'tipo-' + (response.tipoCard)
            cartaoPokemon.classList.add(corDeFundoTipo)
            img.setAttribute('src', (response.imagem))
            biografia.textContent = (response.biografia)
        })
        .catch(error => console.log('error', error));
}

document.addEventListener('keydown', function (e) {
    if (e.key == "Enter") {
        document.getElementById("btFechar").click();
    }
});
