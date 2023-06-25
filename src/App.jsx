
import React, {Component} from 'react';
/* ------------------------------- componentes ------------------------------ */
import Searcher from './componentes/Searcher';
import PokemonList from './componentes/PokemonList';
import { Col } from 'antd';
/* ---------------------------------- utils --------------------------------- */
import { getPokemon } from './api';
/* --------------------------------- styles --------------------------------- */
import logo from './static/logo.svg';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      pokemons: [],
    };
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  async fetchPokemons() {
    try {
      const pokemonsRes = await getPokemon();
      this.setState({ pokemons: pokemonsRes });
    }
    catch(error) {
      console.log('Error en fetch pokemons', error);
    }
  }

  render() {
    const { pokemons } = this.state;

    return (
      <div className="App">
        <Col span={4} offset={10}>
          <img src={logo} alt='Pokedux' />
        </Col>
        <Col span={8} offset={8}>
          <Searcher/>
        </Col>
        <PokemonList pokemons={pokemons}/>
      </div>
    );
  }
}

export default App;
