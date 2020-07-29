import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './styles/index.module.scss';

const root = document.getElementById('app');

render(<App />, root);
