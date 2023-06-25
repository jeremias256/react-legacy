
import React, {Component} from 'react';
/* ----------------------------- componentes ----------------------------- */
import PokemonCard from './PokemonCard';

class PokemonList extends Component {
  render() {
    const { pokemons } = this.props;

    return (
      <div className='PokemonList'>
        {pokemons.map(pokemon => (
          <PokemonCard
            name={pokemon.name}
            key={pokemon.name}
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
