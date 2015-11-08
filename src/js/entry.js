// Import CSS
import '../css/master.scss';

// Import React and JS
import React from 'react';
import ReactDOM from 'react-dom';
import Stars from './Stars'; 

function run() {
	var starsContainer = document.querySelector('[data-stars]');
	React.render(<Stars />, starsContainer);
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.indexOf(document.readyState) > -1 && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}
