
import {Component} from 'react';
/* ----------------------------- componentes ----------------------------- */
import PokemonCard from './PokemonCard';

class PokemonList extends Component {

  render() {
    const { pokemons } = this.props;

    return (
      <div className='PokemonList'>
        {pokemons.map((pokemon, index) => (
          <PokemonCard
            name={pokemon.name}
            key={`${pokemon.name}-${index}`}
            image={pokemon.sprites.front_default}
          />
        ))}
      </div>
    );
  }
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};

export default PokemonList;
