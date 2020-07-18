import React from 'react';
import PokemonGrid from '../components/PokemonGrid';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Pokedex.scss';
import LoadingSpinner from '../components/LoadingSpinner';

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
            <button type="button" onClick={loadPreviousPokemon}>
              prev 20
            </button>
            <div className={styles.navText}>
              <span>{`Displaying 20 of ${data.count} pokemon`}</span>
            </div>
            <button type="button" onClick={loadNextPokemon}>
              next 20
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
