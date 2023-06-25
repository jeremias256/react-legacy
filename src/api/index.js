
export const getPokemon = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0')
  .then((res) => res.json())
  .then((data) => data.results)
  .catch((err) => console.log(err));
};

export const getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url)
  .then((res) => res.json())
  .then((data) => data)
  .catch((err) => console.log(err));
}