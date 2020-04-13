import React, { Fragment } from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import Header from './components/Header';
import Pokedex from './containers/Pokedex';

const App = () => (
  <>
    <Header />
    <Pokedex />
  </>
);
// hot export works with RHL. Remove line 11 when starting fullstack integration
export default hot(module)(App);
// Uncomment line 13 & delete line 11 when starting fullstack integration
// export default App;
