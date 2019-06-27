import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Card = styled.div`
  opacity: 0.95;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 1), 0 1px 2px rgba(255, 0, 0, 0);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 50px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(255, 0, 0, 0);
  }
  height: 200px;
  width: 200px;
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

export default class PokeCard extends Component{
    state={
        name: '',
        image: '',
        id: ''
       
    }

    componentDidMount() {
        const { name,id } = this.props;
        this.setState({ name });
      }


    render() {
        const {name,image,id} = this.props;
      
        return(
         
        <div className='mx-auto p-3'>
            <StyledLink to={`pokemon/${id}`}>
            <Card className="card">
            <h5 className="card-header text-center">{this.state.name}</h5> 
             <div className="imageSize mx-auto"><img src={image} />
             </div>
             </Card>
             </StyledLink>
        </div>

        )
    }
}