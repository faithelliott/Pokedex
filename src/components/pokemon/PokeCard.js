import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './PokeCard.css';


const Card = styled.div`
  opacity: 0.95;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 1), 0 1px 2px rgba(255, 0, 0, 0);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 50px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(255, 0, 0, 0);
  }
  height:30vh;
  width: 30vh;
  overflow: auto;
  -webkit-font-smoothing: antialiased;
`;

const StyledLink = styled(Link)`

  color: grey;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  &:hover,
  &:active {
    text-decoration: none;
  }
`;
const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6'
};


export default class PokeCard extends Component{
    state={
        name: '',
        image: '',
        id: '',
        types:[]
    }

    componentDidMount() {
        const { name,id,types } = this.props;
        this.setState({ name });
        this.setState({id});
        this.setState({types});
      }

    render() {
        const {name,image,id,types} = this.props;
      
        return(
          
        <div className='mx-auto p-4'>
            <StyledLink to={`pokemon/${id}`}>
            <Card className="card">

            <h5 className="card-header text-center">{this.state.name}</h5> 
            <div className="imageSize mx-auto"><img src={image}/>
             
             <div className="typeDiv">
                  {this.state.types.map(types => (
                    <span 
                      key={types}
                      className="badge badge-pill"
                      style={{
                        backgroundColor: `#${TYPE_COLORS[types]}`,
                        color: 'white'
                      }}
                    >
                      {types
                        .toLowerCase()
                        .split(' ')
                        .map(s => s.charAt(0).toUpperCase() + s.substring(1))}
                    </span>
                  ))}
                
              </div>
             </div>
             </Card>
             </StyledLink>
        </div>
        )
    }
}