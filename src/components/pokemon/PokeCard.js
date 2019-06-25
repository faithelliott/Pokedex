import React, { Component } from 'react'


export default class PokeCard extends Component{
    state={
        name: '',
        image: '',
        pokeID: ''
    }

    componentDidMount() {
        const { name } = this.props;
        this.setState({ name });
      }

    render() {
        const {name,image} = this.props;
        
        return(
        <div className='col-md-3 col-sm-6 mb-5'>
            <div className="card">
             <h6 className="card-title mx-auto">{this.state.name}</h6>
             <div className="imageSize mx-auto"><img src={image} />
             </div>
             </div>
           
        </div>
        )
    }
}