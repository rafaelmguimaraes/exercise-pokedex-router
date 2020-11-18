import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/" >
          <h1> Pokedex </h1>
        </Link>
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