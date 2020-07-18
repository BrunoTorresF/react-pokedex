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
    return <p>loading...</p>;
  }

  if (isError) {
    return <p>error</p>;
  }

  return (
    <main className={styles.container}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <figure>
            <img src={data.sprites.front_default} alt={`${data.name} sprite`} />
          </figure>
          <h1>{data.name}</h1>
          <div>
            <p>{data.weight}</p>
          </div>
          <div>
            <p>{data.height}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Pokemon;
