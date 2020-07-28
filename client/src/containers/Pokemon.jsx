import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LoadingSpinner from '../components/Shared/LoadingSpinner';
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
  console.log(data);
  const {
    name,
    order,
    weight,
    height,
    sprites: { front_default: frontDefault },
    types,
    stats,
    abilities,
  } = data;
  return (
    <main className={styles.container}>
      <div className={styles.introduction}>
        <figure>
          <img src={frontDefault} alt={`${name} sprite`} />
        </figure>
        <div className={styles.basic_info}>
          <h1>{name}</h1>
          <h3>{`No. ${order}`}</h3>
          <p>{`Height: ${(height / 10).toFixed(1)} m`}</p>
          <p>{`Weight: ${(weight / 10).toFixed(1)} kg`}</p>
          <div className={styles.types}>
            <h3>Types</h3>
            {types.map(({ type, slot }) => (
              <span
                className={styles[type.name]}
                key={slot}>{`${type.name}`}</span>
            ))}
          </div>
          <div className={styles.abilities}>
            <h3>Abilities</h3>
            {abilities.map(({ ability, is_hidden: hidden, slot }) => (
              <span
                className={hidden ? styles.italic : ''}
                key={slot}>{`${ability.name}`}</span>
            ))}
          </div>
        </div>
        <div className={styles.base_stats}>
          <h3>Stat</h3>
          <h3>Base Values</h3>
          <h3>EV Points</h3>
          {stats.map(({ base_stat: baseStat, effort, stat }) => (
            <Fragment key={stat.name}>
              <label className={styles.stat_name} htmlFor={stat.name}>
                {stat.name}
              </label>
              <progress
                id={stat.name}
                className={styles.stat_bar}
                max="100"
                value={baseStat}
              />
              <span className={styles.ev_value}>{effort}</span>
            </Fragment>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Pokemon;
