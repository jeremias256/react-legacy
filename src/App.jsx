
import {Component} from 'react';
/* ------------------------------- componentes ------------------------------ */
import Searcher from './componentes/Searcher';
import PokemonList from './componentes/PokemonList';
import { Col } from 'antd';
/* ---------------------------------- utils --------------------------------- */
import { getPokemon, getPokemonDetails } from './api';
/* --------------------------------- styles --------------------------------- */
import logo from './static/logo.svg';
import './App.css';

/* ------------------------------- react redux ------------------------------ */
import { connect } from 'react-redux';
/* --------------------------------- actions -------------------------------- */
import { setPokemons as setPokemonsActions } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  async fetchPokemons() {
    const { setPokemons } = this.props;

    try {
      const pokemonsRes = await getPokemon();
      const pokemonsDetailed = await Promise.all(pokemonsRes.map( pokemon => 
        getPokemonDetails(pokemon))
      );

      setPokemons({ pokemons: pokemonsDetailed });
    }
    catch(error) {
      console.log('Error en fetch pokemons', error);
    }
  }

  render() {
    const { pokemons } = this.props;
    console.log('🚀 - file: App.jsx:45 - App - render - pokemons:', pokemons);
    
    return (
      <div className="App">
        {/* <Col span={4} offset={10}>
          <img src={logo} alt='Pokedux'/>
        </Col>
        <Col span={8} offset={8}>
          <Searcher/>
        </Col>
        <PokemonList pokemons={pokemons.pokemons}/> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemons || [],
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
