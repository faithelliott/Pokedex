import React, { Component } from 'react'
import PokeCard from "./PokeCard";
import axios from 'axios';

export default class PokemonList extends Component {
    state = {
      url: 'https://intern-pokedex.myriadapps.com/api/v1/pokemon/',
      pokemon: null
    };
  
    async componentDidMount() {
      const res = await axios.get(this.state.url);
      this.setState({ pokemon: res.data['data'] });
    }
  
    render() {
      return (
        <div>
          {this.state.pokemon ? (
            <div className="row">
              {this.state.pokemon.map(pokemon => (
                <PokeCard
                  key={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  url={pokemon.url}
                />
              ))}
            </div>
          ) : (
            <hq>loading</hq>
          )}
        </div>
      );
    }
  }