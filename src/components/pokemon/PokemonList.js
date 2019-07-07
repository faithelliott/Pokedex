import React, { Component } from 'react'
import PokeCard from "./PokeCard";
import axios from 'axios';
import './PokemonList.css';



export default class PokemonList extends Component {

  state = {
      url: 'https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=',
      pokemon: null,
      nextPage: 2,
      id:'',
      searchString:'',
    };

    async componentDidMount() {
      const res = await axios.get(this.state.url);
      this.setState({ pokemon: res.data['data'] });
    }
    
     incrementPage = () => {
      if(this.state.nextPage == 37){
        this.state.nextPage = 1;
        
      }else{
        this.setState({nextPage: this.state.nextPage+1});
      }
      
       axios.get(this.state.url+this.state.nextPage).then((response)=> {
         this.setState({
           pokemon: response.data['data'],
         })
       })
       console.log(this.state.nextPage);
    }

    decrementPage = () => {
      if(this.state.nextPage == 1){
        this.state.nextPage = 37;
        
      }else{
        this.setState({nextPage: this.state.nextPage-1});
      }
      axios.get(this.state.url+this.state.nextPage).then((response)=> {
        this.setState({
          pokemon: response.data['data'],
        })
      })
      console.log(this.state.nextPage);
   }

   search = (e) => {
     this.setState({searchString: e.target.value});
     if(e.key === 'Enter'){
      
      axios.get('https://intern-pokedex.myriadapps.com/api/v1/pokemon?name='+this.state.searchString).then((response)=> {
        this.setState({
          pokemon: response.data['data'],
        })
      })
      console.log(this.state.searchString);
     
     
     }
    
   }

    render() {
      return (
        <div> 
         <input type="text"  placeholder="PokeDex" onKeyDown={this.search.bind(this)}></input>
         <button className="button float-left" onClick={this.decrementPage}>{"<"}</button>
         <button className="button float-right"onClick={this.incrementPage}>{">"}</button>
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
            <h1>loading...</h1>
          )}
        </div>
      );
    }
  }