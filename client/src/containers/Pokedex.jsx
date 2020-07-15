import React from 'react';
import PokemonGrid from '../components/PokemonGrid';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Pokedex.scss';

const LoadingSpinner = () => (
  <div className={styles.spinner}>
    <div className={styles.bounce1} />
    <div className={styles.bounce2} />
    <div className={styles.bounce3} />
  </div>
);

const Pokedex = () => {
  // const [pageOffset, setPageOffset] = useState(0);
  const [{ isLoading, isError, data }, doFetch] = useFetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`,
  );

  return (
    <main className={styles.pokecontainer}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <nav className={styles.pokenav}>
            <button type="button">prev 20</button>
            <div className={styles.navText}>
              <span>{`Displaying 20 of ${data.count} pokemon`}</span>
            </div>
            <button type="button">next 20</button>
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
