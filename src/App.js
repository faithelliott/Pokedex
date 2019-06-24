import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      pokemon: []
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    Axios.get("https://intern-pokedex.myriadapps.com/api/v1/pokemon?page=2")
    .then(res => {
      console.log(res);
      this.setState({
        pokemon: res.data.data
      })
    })
  }

  render() {
    console.log(this.state.pokemon);
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
        {pokemon}
        </div>
    );
  }
}

export default App;
