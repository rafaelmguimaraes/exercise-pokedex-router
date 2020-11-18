import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> Pokedex </h1>
        <Route exact
          path="/" 
          render={(props) => 
            <Pokedex {...props} pokemons={pokemons} />
          } 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;