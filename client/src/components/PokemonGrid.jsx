import React from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';

import styles from '../styles/PokemonGrid.scss';

const PokemonGrid = ({ pokemon, isLoading, hasError }) => {
  if (isLoading) {
    return <p>loading...</p>;
  }

  if (hasError) {
    return 'error';
  }

  if (pokemon.length) {
    return (
      <section className={styles.pokedex}>
        {pokemon.map((poke) => (
          <PokemonCard name={poke.name} url={poke.url} key={`${poke.name}`} />
        ))}
      </section>
    );
  }
};

export default PokemonGrid;

PokemonGrid.propTypes = {
  pokemon: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.string.isRequired,
};
