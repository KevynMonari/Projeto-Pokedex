
function getPokemonAbilities(pokemonId, modal) {

    const pokemonDetailUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

    fetch(pokemonDetailUrl)
        .then((response) => response.json())
        .then((pokemonInfo) => {

            const name = pokemonInfo.name;
            const number = pokemonInfo.id;
            const abilities = pokemonInfo.abilities.map((ability) => ability.ability.name).join(', ');
            const weight = pokemonInfo.weight / 10; // Convertendo para quilogramas

            // Atualizar o conteúdo da modal com as informações do Pokémon e suas habilidades
            document.querySelector('.modal-title').textContent = `Informações sobre ${name}`;
            document.querySelector('.modal-body').innerHTML = `
                <span class="pokemonNome">Nome: ${name}</span>
                <span>Número da Pokedex: ${number}</span>
                <span class="pokemonHab">Habilidades: ${abilities}</span>
                <span>Peso: ${weight} kg</span>
            `;

            // Exibir a modal
            modal.style.display = 'block';
        })
}

function mudarModal(pokemonId) {

    const modal = document.querySelector('.modal');
    const actualStyle = modal.style.display;

    if (actualStyle == 'block') {
        modal.style.display = 'none';
    } else {
        pokeApi.getPokemonDetail({ url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}/` })

                getPokemonAbilities(pokemonId, modal);
                modal.style.display = 'block';
        };
}