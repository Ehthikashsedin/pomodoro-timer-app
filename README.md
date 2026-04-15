# Pomodoro Timer App

This is a simple, browser-based Pomodoro Timer application built to help users manage their time effectively using the Pomodoro Technique. 

## Features
- **Work Mode**: 25-minute timer dedicated to focused work.
- **Break Mode**: 5-minute timer for a short break, triggering automatically when the work timer concludes.
- **Visual Cues**: The mode text actively turns red during Work Mode and green during Break Mode to clearly indicate the current session.
- **Controls**: Easy to use Start, Pause, and Reset buttons. 

## Technical Details
The application is built using vanilla HTML, CSS, and JavaScript. It utilizes ES6 Modules to cleanly separate concerns between the UI logic (`UI.js`), the timekeeping logic (`Timer.js`), and the main application controller (`main.js`). The timer is built using object-oriented principles, closures, and the observer pattern (`onTick` and `onComplete`) to ensure the state remains completely synchronized with the user interface.
