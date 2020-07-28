import React from 'react';
import { useParams } from 'react-router-dom';
import IntroPanel from '../components/Pokemon/IntroPanel';
import SpeciesPanel from '../components/Pokemon/SpeciesPanel';
import styles from '../styles/Pokemon.scss';

const Pokemon = () => {
  const { id } = useParams();
  return (
    <main className={styles.container}>
      <IntroPanel id={id} />
      <SpeciesPanel id={id} />
    </main>
  );
};

export default Pokemon;
