import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Dash from './components/layout/Dash'



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      query:'',
      pokemon: [],
      
    }
    this.getData = this.getData.bind(this);

  }
  

  componentDidMount() {
    this.getData();
  }

  getData() {
    Axios.get("https://intern-pokedex.myriadapps.com/api/v1/pokemon?=page1")
    .then(res => {
      
      this.setState({
        pokemon: res.data.data
      })
    })
    
  }



  
  render() {
        
    let pokemon = this.state.pokemon.map((pokemon) => {
      return (
        <>
        
          <h1>{pokemon.name}</h1>
          <img src={pokemon.image} />
       
        </>
  );
});
    return (
    <div class="App">
      <Dash></Dash>
      {pokemon}
    </div>
    )
  }
  
}


export default App;
