import React, { Component } from 'react';
import { mockPokemonData } from '../mock/pokeData';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.pokeInfo = mockPokemonData;
  }

  render() {
    return (
        <div>
          {this.pokeInfo.pokemones.map((pokemon) => {
            return (
                <PokemonInfo pokemon={pokemon} />
            )
          })}
        </div>
    );
  }
}

function PokemonInfo(props) {
  return (
      <div className='Pokemon'>
        <h3>{props.pokemon.name}</h3>
        <img src={props.pokemon.sprites.front_default}/>
        <a href={props.pokemon.video} target="_blank">Video</a>
      </div>
  )
}

export default Pokemon;
