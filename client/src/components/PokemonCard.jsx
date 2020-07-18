import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/PokemonCard.scss';

const PokemonCard = ({ name, url }) => {
  const pokeID = url.match(/\/\d+(?=\/)/)[0].replace('/', '');

  return (
    <div className={styles.pokemonCard}>
      <Link to={`pokedex/${pokeID}`}>
        <figure className={styles.imageWrapper}>
          <img
            alt={`${name} sprite`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`}
          />
        </figure>
        <div className={`${styles.dataWrapper} ${styles.section}`}>
          <div className={styles.title}>
            <span>{name.toUpperCase()}</span>
          </div>
          <div className={styles.subtitle}>
            <span>{`# ${pokeID}`}</span>
          </div>
          <div className={styles.details}>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card&apos;s content.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonCard;

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
