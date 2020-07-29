import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.headerContainer}>
    <img
      alt="pokeball logo"
      className={styles.headerImg}
      src="https://purepng.com/public/uploads/medium/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825789aht1d.png"
    />
    <Link to="/">
      <div className={styles.headerBanner}>
        <h1>Pokedex SPA</h1>
      </div>
    </Link>
  </header>
);

export default Header;
