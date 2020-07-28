import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import PokemonGrid from '../components/Pokedex/PokemonGrid';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Pokedex.scss';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const Pokedex = () => {
  // const [pageOffset, setPageOffset] = useState(0);
  const [{ isLoading, isError, data }, doFetch] = useFetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`,
  );

  const loadNextPokemon = () => {
    doFetch(data.next);
  };

  const loadPreviousPokemon = () => {
    if (data.previous) {
      doFetch(data.previous);
    }
  };

  return (
    <main className={styles.pokecontainer}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <nav className={styles.pokenav}>
            <button
              className={styles.loadBtn}
              type="button"
              onClick={loadPreviousPokemon}>
              <FaArrowAltCircleLeft />
            </button>
            <div className={styles.navText}>
              <span>{`Displaying 20 of ${data.count} pokemon`}</span>
            </div>
            <button
              className={styles.loadBtn}
              type="button"
              onClick={loadNextPokemon}>
              <FaArrowAltCircleRight />
            </button>
          </nav>
          <PokemonGrid
            pokemon={data.results}
            isLoading={isLoading}
            isError={isError}
          />
        </>
      )}
    </main>
  );
};

export default Pokedex;
