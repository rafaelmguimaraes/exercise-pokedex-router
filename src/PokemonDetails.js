import React from 'react';
import { Redirect } from 'react-router-dom';
import pokemons from './data';

class PokemonDetails extends React.Component {
  render() {
    const { id } = this.props.match.params;
    console.log('id:',id);
    console.log('pokemons:',pokemons);
    const pokemon = pokemons.find(pokemon => pokemon.id === parseInt(id));
    console.log('pokemon:',pokemon);
    if (pokemon) 
      return (
        <div className="pokemon">
          <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.type}</p>
            <p>
              Average weight: {`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}
            </p>
          </div>
          <img src={pokemon.image} alt={`${pokemon.name} sprite`} />
          <div>
            <p>
              Summary: {pokemon.summary}
            </p>
          </div>
          <div>
            <p>
            Found At: 
            </p>
            {pokemon.foundAt.map(({ location, map }) => (
              <img
                key={location}
                src={map}
                className="img-map"
                alt={location}
              />
            ))}
          </div>
        </div>
      );
    else {
      alert('URL/ID inválida')
      return (
        <Redirect to="/" />
      );
      }
  }
}

export default PokemonDetails;