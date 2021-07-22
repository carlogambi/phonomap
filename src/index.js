import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import initAnimationManager from './custom-events/initAnimationStep';
import './defaultStyle.css';
import './scrollbar.css';
import './backdropNotSupported.css';

document.onload = () => initAnimationManager.initAnimation();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
