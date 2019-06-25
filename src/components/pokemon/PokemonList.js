import React, { Component } from 'react'
import PokeCard from "./PokeCard";

export default class PokemonList extends Component{
    render() {
        return(
        <div>
            <PokeCard></PokeCard>
        </div>
        )
    }
}