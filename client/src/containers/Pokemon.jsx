import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../components/LoadingSpinner';
import styles from '../styles/Pokemon.scss';

const Pokemon = () => {
  const { id } = useParams();

  const [{ isLoading, isError, data }] = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>error</p>;
  }
  const {
    name,
    order,
    weight,
    height,
    sprites: { front_default: frontDefault },
    types,
  } = data;
  return (
    <main className={styles.container}>
      <div>
        <figure>
          <img src={frontDefault} alt={`${name} sprite`} />
        </figure>
        <h1>{name}</h1>
        <h3>{order}</h3>
        <div>
          <p>{weight}</p>
        </div>
        <div>
          <p>{height}</p>
        </div>
        {types.map(({ type, slot }) => (
          <p key={slot}>{type.name}</p>
        ))}
      </div>
    </main>
  );
};

export default Pokemon;
