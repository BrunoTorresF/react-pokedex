import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles/index.scss';

render(<App />, document.getElementById('app'));
