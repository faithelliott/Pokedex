import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Dash from './components/layout/Dash'
import Pokemon from './components/pokemon/Pokemon';

class App extends Component {
  state = {
    windowHeight: undefined,
    windowWidth: undefined
  }

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }


  render() {
        
    return (
      <Router>
      <div className="App">
        <div className="header">
          <h1>Pokedex</h1>
          </div>
          <Switch>
            <Route exact path="/" component={Dash} />
            <Route exact path="/Pokemon/:id" component={Pokemon} />
          </Switch>
        </div>
    </Router>
    
  );
}
}


export default App;
