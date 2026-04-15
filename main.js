// main.js
// Entry point for the application, connecting modules together

import Timer from './Timer.js';
import UI from './UI.js';

// Initialize instances
const timer = new Timer();
const ui = new UI();

// Set up event listeners for the buttons
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', () => {
    // start timer logic
});

pauseBtn.addEventListener('click', () => {
    // pause timer logic
});

resetBtn.addEventListener('click', () => {
    // reset timer logic
});
