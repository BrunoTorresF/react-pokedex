import React from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';
import styles from './PokemonGrid.module.scss';

const PokemonGrid = ({ pokemon, isLoading, isError }) => {
  if (isLoading) {
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>error</p>;
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
  isError: PropTypes.bool.isRequired,
};
