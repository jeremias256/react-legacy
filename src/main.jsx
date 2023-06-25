
import React from 'react';
import ReactDOM from 'react-dom/client';
/* ------------------------------- componentes ------------------------------ */
import App from './App.jsx';
/* ------------------------------- react redux ------------------------------ */
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
/* ------------------------------- selectores ------------------------------- */
import { pokemonsReducer } from './reducers/pokemons.js';

const store = createStore(
  pokemonsReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
