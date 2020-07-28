import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../Shared/LoadingSpinner';
import useFetch from '../../hooks/useFetch';
import styles from '../../styles/SpeciesPanel.scss';

const SpeciesPanel = ({ id }) => {
  const [{ isLoading, isError, data }] = useFetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`,
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <p>error</p>;
  }

  const {
    capture_rate: captureRate,
    base_happiness: baseHappiness,
    egg_groups: eggGroups,
    gender_rate: genderRate,
    evolution_chain: evolutionChain,
    flavor_text_entries: flavorTexts,
    genera,
    generation,
    growth_rate: growthRate,
    habitat,
    hatch_counter: hatchCounter,
    shape,
  } = data;

  const filterTextByLang = (array, lang) =>
    array.filter((item) => item.language.name === lang);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <h3>Species</h3>
          <div className={styles.species}>
            <div>
              <p>Genus</p>
              <p>{filterTextByLang(genera, 'en')[0].genus}</p>
            </div>
            <div>
              <p>Introduced</p>
              <p>{generation.name}</p>
            </div>
            <div>
              <p>Capture Rate</p>
              <p>{captureRate}</p>
            </div>
            <div>
              <p>Base Happiness</p>
              <p>{baseHappiness}</p>
            </div>
            <div>
              <p>Gender Ratio</p>
              <progress
                id="genderrate"
                value={((8 - genderRate) / 8) * 100}
                max="100"
              />
            </div>
            <div>
              <p>Description</p>
              <p>{filterTextByLang(flavorTexts, 'en')[0].flavor_text}</p>
            </div>
            <div>
              <p>Leveling Rate</p>
              <p>{growthRate.name}</p>
            </div>
            <div>
              <p>Habitat</p>
              <p>{habitat.name}</p>
            </div>
            <div>
              <p>Shape</p>
              <p>{shape.name}</p>
            </div>
          </div>
        </div>
        <div className={styles.info}>
          <h3>Breeding</h3>
          <div className={styles.breeding}>
            <div>
              <p>Egg Groups</p>
              {eggGroups.map((group) => (
                <span className={styles.spacer} key={group.url}>
                  {group.name}
                </span>
              ))}
            </div>
            <div>
              <p>Hatch Time</p>
              <p>{hatchCounter * 255}</p>
            </div>
            <div>
              <p>Evolutions</p>
              <p>{evolutionChain.url}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeciesPanel;

SpeciesPanel.propTypes = {
  id: PropTypes.string.isRequired,
};
