import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/" >
          <h1> Pokedex </h1>
        </Link>
        <Switch>
          <Route exact
            path="/" 
            render={(props) => 
              <Pokedex {...props} pokemons={pokemons} />
            } 
          />
          <Route 
            path="/Pokemon/:id" 
            component={PokemonDetails}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;