import React from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import localforage from 'localforage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Shared/Header';
import Pokedex from './containers/Pokedex';
import Pokemon from './containers/Pokemon';
import styles from './styles/App.module.scss';
import Sidebar from './components/Shared/Sidebar';

localforage.config({
  name: 'reactpokedex',
  storeName: 'pokedex',
});

const App = () => (
  <Router>
    <div className={styles.layout}>
      <Header />
      <Sidebar />
      <Switch>
        <Route path="/pokedex/:id">
          <Pokemon />
        </Route>
        <Route exact path="/">
          <Pokedex />
        </Route>
      </Switch>
    </div>
  </Router>
);
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
