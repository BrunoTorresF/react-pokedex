import React from 'react';
// RHL only for front end development
import { hot } from 'react-hot-loader';
import Header from './components/Header';
import Pokedex from './containers/Pokedex';
import './styles/App.scss';

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
