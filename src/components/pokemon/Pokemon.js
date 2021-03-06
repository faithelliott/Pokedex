import React, { Component } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import './Pokemon.css'

var ColorThief = require('color-thief');

const GoBack = styled.a`
  -webkit-font-smoothing: antialiased;
  width: 2%;
  height:10%;
  margin-left: 1%;
  margin-right: 1%;
  border-radius:50%;
 
`;

const Card = styled.div`
  height: 90vh;
  width: 60vh;
  margin:auto;
  -webkit-font-smoothing: antialiased;
  overflow: auto;
  font-family: 'Roboto';
  font-size: 100%;
`;


export default class Pokemon extends Component{
    state={
        pokemon:[],
        id: '',
        name:'',
        image:'',
        themeColor:'',
        statTitleWidth: 3,
        statBarWidth: 8,
    }

       async componentDidMount(){

        const{id} = this.props.match.params;
        //console.log({id});
        const pokemonUrl = 'https://intern-pokedex.myriadapps.com/api/v1/pokemon/'+id;
        //console.log({pokemonUrl});

        const res = await Axios.get(pokemonUrl);
        
        this.setState({ pokemon: res.data['data']});
        this.setState({hp: this.state.pokemon.stats.hp});
        this.setState({attack: this.state.pokemon.stats.attack});
        this.setState({defense: this.state.pokemon.stats.defense});
        this.setState({speed: this.state.pokemon.stats.speed});
        this.setState({specialAttack: this.state.pokemon.stats['special-attack']});
        this.setState({specialDefense: this.state.pokemon.stats['special-defense']});
        
    }
 
   
    render(){ 
        const {name,image,id,stats,hp} = this.props.match.params;
        
       
        return(   
          
      <div className="col"> 
        
        <GoBack href="#">
            <button  className="button"><span class="glyphicon glyphicon-chevron-left"></span></button>
        </GoBack>
        <Card className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h5>{this.state.pokemon.id}</h5>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 ">
                <img 
                id= "pokeImg"
                  src={this.state.pokemon.image}
                />
              </div>
              <div className="col-md-8">
                <h4>
                  {this.state.pokemon.name}
                </h4>
                <div className="row">
                  <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                    HP 
                  </div>
                  <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${this.state.hp}%`,
                          backgroundColor: `#${this.state.themeColor}`
                        }}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.hp}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                    Attack
                  </div>
                  <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${this.state.attack}%`,
                          backgroundColor: `#${this.state.themeColor}`
                        }}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.attack}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                    Defense
                  </div>
                  <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${this.state.defense}%`,
                          backgroundColor: `#${this.state.themeColor}`
                        }}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.defense}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                    Speed
                  </div>
                  <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${this.state.speed}%`,
                          backgroundColor: `#${this.state.themeColor}`
                        }}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.speed}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                    Sp Atk
                  </div>
                  <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${this.state.specialAttack}%`,
                          backgroundColor: `#${this.state.themeColor}`
                        }}
                        aria-valuenow={this.state.specialAttack}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.specialAttack}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className={`col-12 col-md-${this.state.statTitleWidth}`}>
                    Sp Def
                  </div>
                  <div className={`col-12 col-md-${this.state.statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${this.state.specialDefense}%`,
                          backgroundColor: `#${this.state.themeColor}`
                        }}
                        aria-valuenow={this.state.specialDefense}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{this.state.specialDefense}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-1">
          </div>
          <hr /> 
         <p className="desc">{this.state.pokemon.description}</p> 
          </div>
          </Card>
          </div>
        );
    }
}