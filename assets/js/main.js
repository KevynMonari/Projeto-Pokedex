const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 1080;
const limit = 10;
let offset = 0;

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <button type="button" class="btnAbrir" onclick="mudarModal(${pokemon.number})">
                    Info
                </button>

                <div class="modal" id="myModal" >
                <div class="modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="TituloModalCentralizado">Informações</h5>
                    </div>
                    <div class="modal-body">
                        <span>Nome: ${pokemon.name}</span>
                        <span>Número na pokedex: ${pokemon.number}</span>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btnFechar" onclick="mudarModal()">Fechar</button>
                    </div>
                </div>
                </div>
            </div>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () =>{
    offset += limit

    const qtdRecordNextPago = offset + limit

    if(qtdRecordNextPago >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset, limit)
    }
})