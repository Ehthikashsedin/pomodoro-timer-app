// main.js
// Entry point for the application, connecting modules together

import Timer from './Timer.js';
import UI from './UI.js';

const ui = new UI();
const timer = new Timer(); // Uses default 25 minutes

let isWorkMode = true; // State tracker

// Initial UI state
ui.updateDisplay(timer.getTime());
ui.updateMode('Work Mode');

// Listen for timer ticks
timer.onTick = (timeString) => {
    ui.updateDisplay(timeString);
};

// Listen for timer completion
timer.onComplete = () => {
    // 1. Toggle work mode
    isWorkMode = !isWorkMode;

    // 2. Adjust timer and UI based on what we just toggled to
    if (isWorkMode) {
        timer.reset(25 * 60); // 25 minutes
        ui.updateMode('Work Mode');
    } else {
        timer.reset(5 * 60); // 5 minutes
        ui.updateMode('Break Mode');
    }

    // 3. Automatically begin the next cycle!
    timer.start();
};

// Set up event listeners for the buttons
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', () => {
    timer.start();
});

pauseBtn.addEventListener('click', () => {
    timer.pause();
});

resetBtn.addEventListener('click', () => {
    // Resetting should always take us back to a fresh Work Mode
    isWorkMode = true;
    timer.reset(25 * 60);
    ui.updateMode('Work Mode');
});
