import React, { Component } from 'react'
import PokeCard from "./PokeCard";
import axios from 'axios';
import Button from 'react-bootstrap/Button';







export default class PokemonList extends Component {

  state = {
      url: 'https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=',
      newUrl: 'https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=1',
      pokemon: null,
      nextPage: null,
      
    };

    async componentDidMount() {
      const res = await axios.get(this.state.url);
      this.setState({ pokemon: res.data['data'] });
    }
    
     incrementPage = () => {
       this.setState({nextPage: this.state.nextPage+1});
       axios.get(this.state.url+this.state.nextPage).then((response)=> {
         this.setState({
           pokemon: response.data['data'],
         })
       })
    }

    decremenentPage = () => {
      this.setState({nextPage: this.state.nextPage-1});
      axios.get(this.state.url+this.state.nextPage).then((response)=> {
        this.setState({
          pokemon: response.data['data'],
        })
      })
   }

  
    render() {
      return (
        <div>
          <div className="header">
          <Button 
           style={{
            backgroundColor: "transparent",
            borderColor: "#fff",
            borderRadius: 25,
            width: 50,
            height: 50,
            position: "left",
            
        }}
        textStyle={{ color: "#FFFFFF" }} onClick={this.decrementPage}>{"<"}</Button>
          <Button style={{
            backgroundColor: "transparent",
            borderColor: "#fff",
            borderRadius: 25,
            width: 50,
            height: 50,
            position: "right",
          
        }}
        textStyle={{ color: "#FFFFFF" }}  onClick={this.incrementPage}>{">"}</Button></div>
          {this.state.pokemon ? (
            <div className="row">
              {this.state.pokemon.map(pokemon => (
                <PokeCard
                  key={pokemon.id}
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