import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';

const Pokedex = () => {
  const [pageOffset, setPageOffset] = useState(0);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${pageOffset}&limit=20`, {
      method: 'GET'
    })
      .then(res => res.json())
      .then(pokeData => {
        setPokemon(pokeData.results);
        localStorage.setItem(`${pageOffset}`, pokeData.results);
      })
      .catch(error => console.error(error));
  }, [pageOffset]);

  return (
    <main className="pokedex-main">
      {pokemon.length ? (
        pokemon.map(poke => <PokemonCard name={poke.name} url={poke.url} />)
      ) : (
        <p>loading...</p>
      )}
    </main>
  );
};

export default Pokedex;
