import React from 'react';
import Image from 'react-bootstrap/Image';

const Header = () => (
  <header>
    <Image
      style={{ maxWidth: '2rem' }}
      src="https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825789aht1d.png"
      roundedCircle
    />
    <h1>Pokedex SPA</h1>
  </header>
);

export default Header;
