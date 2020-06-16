import React, { useState, useEffect } from 'react';
import PokemonGrid from '../components/PokemonGrid';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Pokedex.scss';

const getSavedData = (currPage) => {
  if (sessionStorage.getItem(currPage)) {
    const pokemon = JSON.parse(sessionStorage.getItem(currPage));
    console.log('saved data', pokemon);
    return pokemon;
  }
  return [];
};

const Pokedex = () => {
  const offset = 20;
  const [pageNum, setPageNum] = useState(0);
  const [pokeCount, setPokeCount] = useState(() =>
    sessionStorage.getItem('count'),
  );
  const [pageNav, setPageNav] = useState({ next: null, previous: null });
  const [pokemonData, setPokemonData] = useState(() => getSavedData(pageNum));

  // const [pokedexLoading, pokedexError, pokedexData] = useFetch(
  //   `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`,
  // );
  // const { count, results: pokemon } = pokedexData;

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`,
      );
      const { count, next, previous, results } = await data.json();
      setPokemonData(results);
      setPokeCount(count);
      setPageNav({ next, previous });
    }
    if (!pokemonData.length) {
      fetchData();
    }
  }, [pageNum, pokemonData]);

  useEffect(() => {
    sessionStorage.setItem(`${pageNum}`, JSON.stringify(pokemonData));
    sessionStorage.setItem('count', pokeCount);
  }, [pageNum, pokemonData, pokeCount]);

  return (
    <main className={styles.pokecontainer}>
      <nav className={styles.pokenav}>
        <button type="button">prev 20</button>
        <div className={styles.navText}>
          <span>{`Displaying 20 of ${pokeCount} pokemon`}</span>
        </div>
        <button type="button">next 20</button>
      </nav>
      <PokemonGrid pokemon={pokemonData} />
    </main>
  );
};

export default Pokedex;
