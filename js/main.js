var loadedPokemonsCount = 0;
var pokemonsListElement = document.querySelector('.pokemons__list');
var pokemonTemplateElement = document.querySelector('#pokemon-template').content;
var pokemonsCountInputElement = document.querySelector('.pokemons-count-input');
var pokemonBtnElement = document.querySelector('.pokemons-show-button');

pokemonBtnElement.addEventListener('click', function(){
	var requiredPokemonsCount = parseInt(pokemonsCountInputElement.value, 10);
	
	var newPokemonsElementsFragment = document.createDocumentFragment();
	
	pokemons.slice(0).splice(loadedPokemonsCount, requiredPokemonsCount).forEach(function (pokemon){
		
		var pokemonElement = document.importNode(pokemonTemplateElement, true);
		
		pokemonElement.querySelector('.pokemon-img').src = pokemon.img;
		pokemonElement.querySelector('.pokemon__title').textContent = pokemon.name;
		pokemonElement.querySelector('.pokemon__id').textContent = 'Id:' + ' ' + pokemon.id + '.';
		pokemonElement.querySelector('.pokemon__num').textContent = 'Num:' + ' ' + pokemon.num + '.'; 
		pokemonElement.querySelector('.pokemon__type').textContent = 'Type:' + ' ' + pokemon.type.join(', ') + '.';
		pokemonElement.querySelector('.pokemon__height').textContent = 'Height:' + ' ' + pokemon.height + '.';
		pokemonElement.querySelector('.pokemon__weight').textContent ='Weight:' + ' ' + pokemon.weight + '.';
		pokemonElement.querySelector('.pokemon__candy').textContent = 'Candy:' + ' ' + pokemon.candy + '.';
		pokemonElement.querySelector('.pokemon__candy-count').textContent ='Candy count:' + ' ' + pokemon.candy_count + '.';
		pokemonElement.querySelector('.pokemon__egg').textContent = 'Egg:' + ' ' + pokemon.egg + '.';
		pokemonElement.querySelector('.pokemon__spawn-chance').textContent = 'Spawn chance:' + ' ' + pokemon.spawn_chance + '.';
		pokemonElement.querySelector('.pokemon__avg-spawns').textContent = 'Avg spawns:' + ' ' + pokemon.avg_spawns + '.';
		pokemonElement.querySelector('.pokemon__spawn-time').textContent = 'Spawn time:' + ' ' + pokemon.spawn_time + '.';
		pokemonElement.querySelector('.pokemon__multipliers').textContent = 'Multipliers:' + ' ' + pokemon.multipliers + '.';
		pokemonElement.querySelector('.pokemon__weaknesses').textContent = 'Weaknesses:' + ' ' + pokemon.weaknesses.join(', ') + '.';
		
		var pokemonEvolutions = ' ';
		if (pokemon.hasOwnProperty('next_evolution')){
			for (var i = 0; i < pokemon.next_evolution.length; i++){
				pokemonEvolutions += pokemon.next_evolution[i].name + ' ';
			}
		}

		pokemonElement.querySelector('.pokemon__next-evolution').textContent = 'Next evolution:' + ' ' + pokemonEvolutions + '.';
		
		newPokemonsElementsFragment.appendChild(pokemonElement);
	});
	
	pokemonsListElement.appendChild(newPokemonsElementsFragment);
	
	loadedPokemonsCount += requiredPokemonsCount;
	
	pokemonsCountInputElement.value = '';
});