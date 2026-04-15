// UI.js
// Handles all updates to the DOM based on the current state of the application

class UI {
    constructor() {
        this.displayElement = document.getElementById('display');
        this.modeElement = document.getElementById('mode');

        if (!this.displayElement || !this.modeElement) {
            throw new Error('Required UI elements are missing');
        }
    }

    updateDisplay(timeString) {
        this.displayElement.textContent = timeString;
    }

    updateMode(modeName) {
        this.modeElement.textContent = modeName;
    }
}

export default UI;
