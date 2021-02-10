import React, { Component } from 'react';
import "./styles.css";

import PokeCard from "./components/PokeCard";

class App extends Component {
  render () {
    return (
        <div className='App'>
          <h1>Welcome to Sagrario's challenge solution!</h1>
          <h2>Here my favorite pokemones</h2>
          <PokeCard />
        </div>
    )
  }
}

export default App;
