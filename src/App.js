import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import Dash from './components/layout/Dash'



class App extends Component {





  
  render() {
        

    return (
    <div class="App">
      <div class="header">
  <h1>PokeDex</h1>
</div>
      <Dash></Dash>
      
    </div>
    )
  }
  
}


export default App;
