import React from 'react';
import PokemonGrid from '../components/PokemonGrid';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Pokedex.scss';

const Pokedex = () => {
  // const [pageOffset, setPageOffset] = useState(0);
  const [pokedexLoading, pokedexError, pokedexData] = useFetch(
    `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`,
  );
  const { count, results: pokemon } = pokedexData;

  return (
    <main className={styles.pokecontainer}>
      <nav className={styles.pokenav}>
        <button type="button">prev 20</button>
        <div className={styles.navText}>
          <span>{`Displaying 20 of ${count} pokemon`}</span>
        </div>
        <button type="button">next 20</button>
      </nav>
      <PokemonGrid
        pokemon={pokemon}
        isLoading={pokedexLoading}
        hasError={pokedexError}
      />
    </main>
  );
};

export default Pokedex;
