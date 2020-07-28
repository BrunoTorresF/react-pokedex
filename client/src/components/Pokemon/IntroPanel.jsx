import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../../hooks/useFetch';
import LoadingSpinner from '../Shared/LoadingSpinner';
import styles from '../../styles/IntroPanel.scss';

const IntroPanel = ({ id }) => {
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
    stats,
    abilities,
  } = data;
  return (
    <div className={styles.introduction}>
      <div className={styles.wrapper}>
        <figure>
          <img src={frontDefault} alt={`${name} sprite`} />
        </figure>
        <div className={styles.basic_info}>
          <div>
            <h2>Name</h2>
            <h3>{name}</h3>
          </div>
          <div>
            <h2>Number</h2>
            <h3>{order}</h3>
          </div>
          <div>
            <h4>Height</h4>
            <p>{` ${(height / 10).toFixed(1)} m`}</p>
          </div>
          <div>
            <h4>Weight</h4>
            <p>{`${(weight / 10).toFixed(1)} kg`}</p>
          </div>
          <div className={styles.types}>
            <h4>Types</h4>
            {types.map(({ type, slot }) => (
              <span
                className={styles[type.name]}
                key={slot}>{`${type.name}`}</span>
            ))}
          </div>
          <div className={styles.abilities}>
            <h4>Abilities</h4>
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
              <label htmlFor={stat.name}>{stat.name}</label>
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
    </div>
  );
};

export default IntroPanel;

IntroPanel.propTypes = {
  id: PropTypes.string.isRequired,
};
