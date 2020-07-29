import React from 'react';
import { Link } from 'react-router-dom';
import { MdHelpOutline } from 'react-icons/md';
import pokedex from '../../styles/assets/pokedex.png';
import styles from './Sidebar.module.scss';

const Sidebar = () => (
  <section className={styles.sidebar}>
    <div className={styles.head}>
      <figure>
        <img src={pokedex} alt="pokedex" />
      </figure>
    </div>
    <div className={styles.nav}>
      <nav className={styles.nav_wrapper}>
        <Link to="/">Home</Link>
        <Link to="/moves">Move icon</Link>
        <Link to="/abilities">ability icon</Link>
        <Link to="/items">item icon</Link>
        <Link to="/berries">Berry icon</Link>
        <Link to="/types">types icon</Link>
      </nav>
    </div>
    <div className={styles.footer}>
      <figure>
        <MdHelpOutline />
      </figure>
    </div>
  </section>
);

export default Sidebar;
