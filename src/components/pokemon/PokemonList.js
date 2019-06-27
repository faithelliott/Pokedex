import React, { Component } from 'react'
import PokeCard from "./PokeCard";
import axios from 'axios';
import './PokemonList.css';
import Button from 'react-bootstrap/Button';


export default class PokemonList extends Component {

  state = {
      url: 'https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=',
      newUrl: 'https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1',
      pokemon: null,
      nextPage: 2,
      id:''
      
    };

    async componentDidMount() {
      const res = await axios.get(this.state.url);
      this.setState({ pokemon: res.data['data'] });
    }
    
     incrementPage = () => {
      if(this.state.nextPage == 37)
      {
        this.state.nextPage = 1;
        
      }else
      {
        this.setState({nextPage: this.state.nextPage+1});
      }
      
       axios.get(this.state.url+this.state.nextPage).then((response)=> {
         this.setState({
           pokemon: response.data['data'],
         })
       })
       console.log(this.state.nextPage);
    }

    decremenentPage = () => {
      if(this.state.nextPage == 1)
      {
        this.state.nextPage = 37;
        
      }else
      {
        this.setState({nextPage: this.state.nextPage-1});
      }
      axios.get(this.state.url+this.state.nextPage).then((response)=> {
        this.setState({
          pokemon: response.data['data'],
        })
      })
      console.log(this.state.nextPage);
   }

  
    render() {
      return (
        <div>
         <button className="button" onClick={this.decrementPage}><span class="glyphicon glyphicon-arrow-left"></span></button>
         <button className="button" onClick={this.incrementPage}><span class="glyphicon glyphicon-arrow-right"></span></button>
         
          {this.state.pokemon ? (
            <div className="row">
              {this.state.pokemon.map(pokemon => (
                <PokeCard
                  key={pokemon.name}
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                />
              ))}
            </div>
          ) : (
            <h1>loading</h1>
          )}
        </div>
      );
    }
  }