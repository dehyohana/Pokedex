const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')
var url = "https://api-pokemon-mendes.herokuapp.com/api/pokemon?size=6&page=0"
var pagina = 0
var numeroDePaginas
var classeTipoPokemonA
var nomePokemonAParaPesquisa
var classeTipoPokemonB
var nomePokemonBParaPesquisa
var classeTipoPokemonC
var nomePokemonCParaPesquisa
var classeTipoPokemonD
var nomePokemonDParaPesquisa
var classeTipoPokemonE
var nomePokemonEParaPesquisa
var classeTipoPokemonF
var nomePokemonFParaPesquisa

getApi()

function getApi() {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => {
            var dados = JSON.parse(result)

            numeroDePaginas = dados.totalPages

            for (var i = 0; i <= 5; i++) {
                var selecionaArray = dados.content[i]

                for (var y = 0; y <= 9; y++) {
                    var lala = y
                    var dadosSetados = selecionaArray[Object.keys(selecionaArray)[y]]

                    if (i == 0) {
                        if (lala == 0) {
                            var id = dadosSetados
                            numeroPokemonA.textContent = ("#" + id)
                        }
                        if (lala == 1) {
                            nomePokemonAParaPesquisa = dadosSetados
                            nomePokemonA.textContent = dadosSetados
                        }
                        if (lala == 2) {
                            nomeMiniaturaA.textContent = dadosSetados
                        }
                        if (lala == 3) {
                            var altura = dadosSetados
                            alturaPokemonA.textContent = ("Altura: " + altura + " M")
                        }
                        if (lala == 4) {
                            var peso = dadosSetados
                            pesoPokemonA.textContent = ("Peso: " + peso + " Kg")
                        }
                        if (lala == 5) {
                            habilidadesPokemonA.textContent = dadosSetados
                        }
                        if (lala == 6) {
                            tipoPokemonA.textContent = dadosSetados
                        }
                        if (lala == 7) {
                            classeTipoPokemonA = 'tipo-' + dadosSetados
                            var tipo = dadosSetados
                            const tipoDoPokemonCard = 'tipo-' + dadosSetados
                            const cartaoPokemon = document.getElementById('cartao-a')
                            cartaoPokemon.classList.add(tipoDoPokemonCard)
                        }
                        if (lala == 8) {
                            var caminho = dadosSetados
                            var img = document.querySelector("#imgA");
                            img.setAttribute('src', caminho);
                        }
                        if (lala == 9) {
                            var caminho = dadosSetados
                            var img = document.querySelector("#imgMiniaturaA");
                            img.setAttribute('src', caminho);
                        }
                        if (lala != 9) {
                            lala++
                        } else {
                            lala = 0
                        }
                    }

                    if (i == 1) {
                        if (lala == 0) {
                            var id = dadosSetados
                            numeroPokemonB.textContent = ("#" + id)
                        }
                        if (lala == 1) {
                            nomePokemonBParaPesquisa = dadosSetados
                            nomePokemonB.textContent = dadosSetados
                        }
                        if (lala == 2) {
                            nomeMiniaturaB.textContent = dadosSetados
                        }
                        if (lala == 3) {
                            var altura = dadosSetados
                            alturaPokemonB.textContent = ("Altura: " + altura + " M")
                        }
                        if (lala == 4) {
                            var peso = dadosSetados
                            pesoPokemonB.textContent = ("Peso: " + peso + " Kg")
                        }
                        if (lala == 5) {
                            habilidadesPokemonB.textContent = dadosSetados
                        }
                        if (lala == 6) {
                            tipoPokemonB.textContent = dadosSetados
                        }
                        if (lala == 7) {
                            classeTipoPokemonB = 'tipo-' + dadosSetados
                            var tipo = dadosSetados
                            const tipoDoPokemonCard = 'tipo-' + dadosSetados
                            const cartaoPokemon = document.getElementById('cartao-b')
                            cartaoPokemon.classList.add(tipoDoPokemonCard)
                        }
                        if (lala == 8) {
                            var caminho = dadosSetados
                            var img = document.querySelector("#imgB");
                            img.setAttribute('src', caminho);
                        }
                        if (lala == 9) {
                            var caminho = dadosSetados
                            var img = document.querySelector("#imgMiniaturaB");
                            img.setAttribute('src', caminho);
                        }
                        if (lala != 9) {
                            lala++
                        } else {
                            lala = 0
                        }

                    }

                    if (i == 2) {

                        if (lala == 0) {
                            var id = dadosSetados
                            numeroPokemonC.textContent = ("#" + id)
                        }
                        if (lala == 1) {
                            nomePokemonCParaPesquisa = dadosSetados
                            nomePokemonC.textContent = dadosSetados
                        }
                        if (lala == 2) {
                            nomeMiniaturaC.textContent = dadosSetados
                        }
                        if (lala == 3) {
                            var altura = dadosSetados
                            alturaPokemonC.textContent = ("Altura: " + altura + " M")
                        }
                        if (lala == 4) {
                            var peso = dadosSetados
                            pesoPokemonC.textContent = ("Peso: " + peso + " Kg")
                        }
                        if (lala == 5) {
                            habilidadesPokemonC.textContent = dadosSetados
                        }
                        if (lala == 6) {
                            tipoPokemonC.textContent = dadosSetados
                        }
                        if (lala == 7) {
                            classeTipoPokemonC = 'tipo-' + dadosSetados
                            var tipo = dadosSetados
                            const tipoDoPokemonCard = 'tipo-' + dadosSetados
                            const cartaoPokemon = document.getElementById('cartao-c')
                            cartaoPokemon.classList.add(tipoDoPokemonCard)
                        }
                        if (lala == 8) {
                            var caminho = dadosSetados
                            var img = document.querySelector("#imgC");
                            img.setAttribute('src', caminho);
                        }
                        if (lala == 9) {
                            var caminho = dadosSetados
                            var img = document.querySelector("#imgMiniaturaC");
                            img.setAttribute('src', caminho);
                        }
                        if (lala != 9) {
                            lala++
                        } else {
                            lala = 0
                        }

                    }

                    if (i == 3) {

                        if (lala == 0) {
                            var id = dadosSetados
                            numeroPokemonD.textContent = ("#" + id)
                        }
                        if (lala == 1) {
                            nomePokemonDParaPesquisa = dadosSetados
                            nomePokemonD.textContent = dadosSetados
                        }
                        if (lala == 2) {
                            nomeMiniaturaD.textContent = dadosSetados
                        }
                        if (lala == 3) {
                            var altura = dadosSetados
                            alturaPokemonD.textContent = ("Altura: " + altura + " M")
                        }
                        if (lala == 4) {
                            var peso = dadosSetados
                            pesoPokemonD.textContent = ("Peso: " + peso + " Kg")
                        }
                        if (lala == 5) {
                            habilidadesPokemonD.textContent = dadosSetados
                        }
                        if (lala == 6) {
                            tipoPokemonD.textContent = dadosSetados
                        }
                        if (lala == 7) {
                            classeTipoPokemonD = 'tipo-' + dadosSetados
                            var tipo = dadosSetados
                            const tipoDoPokemonCard = 'tipo-' + dadosSetados
                            const cartaoPokemon = document.getElementById('cartao-d')
                            cartaoPokemon.classList.add(tipoDoPokemonCard)
                        }
                        if (lala == 8) {
                            var caminho = dadosSetados
                            var img = document.querySelector("#imgD");
                            img.setAttribute('src', caminho);
                        }
                        if (lala == 9) {
                            var caminho = dadosSetados
                            var img = document.querySelector("#imgMiniaturaD");
                            img.setAttribute('src', caminho);
                        }
                        if (lala != 9) {
                            lala++
                        } else {
                            lala = 0
                        }

                    }

                    if (i == 4) {

                        if (lala == 0) {
                            var id = dadosSetados
                            numeroPokemonE.textContent = ("#" + id)
                        }
                        if (lala == 1) {
                            nomePokemonEParaPesquisa = dadosSetados
                            nomePokemonE.textContent = dadosSetados
                        }
                        if (lala == 2) {
                            nomeMiniaturaE.textContent = dadosSetados
                        }
                        if (lala == 3) {
                            var altura = dadosSetados
                            alturaPokemonE.textContent = ("Altura: " + altura + " M")
                        }
                        if (lala == 4) {
                            var peso = dadosSetados
                            pesoPokemonE.textContent = ("Peso: " + peso + " Kg")
                        }
                        if (lala == 5) {
                            habilidadesPokemonE.textContent = dadosSetados
                        }
                        if (lala == 6) {
                            tipoPokemonE.textContent = dadosSetados
                        }
                        if (lala == 7) {
                            classeTipoPokemonE = 'tipo-' + dadosSetados
                            var tipo = dadosSetados
                            const tipoDoPokemonCard = 'tipo-' + dadosSetados
                            const cartaoPokemon = document.getElementById('cartao-e')
                            cartaoPokemon.classList.add(tipoDoPokemonCard)
                        }
                        if (lala == 8) {
                            var caminho = dadosSetados
                            var img = document.querySelector("#imgE");
                            img.setAttribute('src', caminho);
                        }
                        if (lala == 9) {
                            var caminho = dadosSetados
                            var img = document.querySelector("#imgMiniaturaE");
                            img.setAttribute('src', caminho);
                        }
                        if (lala != 9) {
                            lala++
                        } else {
                            lala = 0
                        }

                    }

                    if (i == 5) {

                        if (lala == 0) {
                            var id = dadosSetados
                            numeroPokemonF.textContent = ("#" + id)
                        }
                        if (lala == 1) {
                            nomePokemonFParaPesquisa = dadosSetados
                            nomePokemonF.textContent = dadosSetados
                        }
                        if (lala == 2) {
                            nomeMiniaturaF.textContent = dadosSetados
                        }
                        if (lala == 3) {
                            var altura = dadosSetados
                            alturaPokemonF.textContent = ("Altura: " + altura + " M")
                        }
                        if (lala == 4) {
                            var peso = dadosSetados
                            pesoPokemonF.textContent = ("Peso: " + peso + " Kg")
                        }
                        if (lala == 5) {
                            habilidadesPokemonF.textContent = dadosSetados
                        }
                        if (lala == 6) {
                            tipoPokemonF.textContent = dadosSetados
                        }
                        if (lala == 7) {
                            classeTipoPokemonF = 'tipo-' + dadosSetados
                            var tipo = dadosSetados
                            const tipoDoPokemonCard = 'tipo-' + dadosSetados
                            const cartaoPokemon = document.getElementById('cartao-f')
                            cartaoPokemon.classList.add(tipoDoPokemonCard)
                        }
                        if (lala == 8) {
                            var caminho = dadosSetados
                            var img = document.querySelector("#imgF");
                            img.setAttribute('src', caminho);
                        }
                        if (lala == 9) {
                            var caminho = dadosSetados
                            var img = document.querySelector("#imgMiniaturaF");
                            img.setAttribute('src', caminho);
                        }
                        if (lala != 9) {
                            lala++
                        } else {
                            lala = 0
                        }

                    }
                }
            }
        })
        .catch(error => console.log("quebrou"))
}

function nextPage() {
    if (pagina == (numeroDePaginas - 1)) {
        alert("As páginas acabaram!");
    } else {
        pagina++
        url = "https://api-pokemon-mendes.herokuapp.com/api/pokemon?size=6&page=" + pagina
        document.getElementById("cartao-a").classList.remove(classeTipoPokemonA)
        document.getElementById("cartao-b").classList.remove(classeTipoPokemonB)
        document.getElementById("cartao-c").classList.remove(classeTipoPokemonC)
        document.getElementById("cartao-d").classList.remove(classeTipoPokemonD)
        document.getElementById("cartao-e").classList.remove(classeTipoPokemonE)
        document.getElementById("cartao-f").classList.remove(classeTipoPokemonF)
        getApi()
    }
}

function previousPage() {
    if (pagina == 0) {
        alert("Não existe página anterior!");
    } else {
        pagina = pagina - 1
        url = "https://api-pokemon-mendes.herokuapp.com/api/pokemon?size=6&page=" + pagina
        document.getElementById("cartao-a").classList.remove(classeTipoPokemonA)
        document.getElementById("cartao-b").classList.remove(classeTipoPokemonB)
        document.getElementById("cartao-c").classList.remove(classeTipoPokemonC)
        document.getElementById("cartao-d").classList.remove(classeTipoPokemonD)
        document.getElementById("cartao-e").classList.remove(classeTipoPokemonE)
        document.getElementById("cartao-f").classList.remove(classeTipoPokemonF)
        getApi()
    }
}

const botaoNext = document.getElementById("voltar")
botaoNext.addEventListener("click", previousPage)

const botaoPrevious = document.getElementById("proximo")
botaoPrevious.addEventListener("click", nextPage)

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemomAberto = document.querySelector('.aberto')
        cartaoPokemomAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})

function armazenaDadosPokemon(valor) {
    console.log(valor)
    sessionStorage.setItem('pokemon', valor)
}