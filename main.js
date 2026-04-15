

import Timer from './Timer.js';
import UI from './UI.js';

const ui = new UI();
const timer = new Timer(3);

let isWorkMode = true;


ui.updateDisplay(timer.getTime());
ui.updateMode('Work Mode');


timer.onTick = (timeString) => {
    ui.updateDisplay(timeString);
};


timer.onComplete = () => {

    isWorkMode = !isWorkMode;
    

    if (isWorkMode) {
        timer.reset(3); // 25 minutes
        ui.updateMode('Work Mode');
    } else {
        timer.reset(3); // 5 minutes
        ui.updateMode('Break Mode');
    }


    timer.start();
};


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
    isWorkMode = true;
    timer.reset(25 * 60);
    ui.updateMode('Work Mode');
});
