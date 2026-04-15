// UI.js
// Handles all updates to the DOM based on the current state of the application

class UI {
    constructor() {
        // Retrieve DOM elements you will be interating with
        this.displayElement = document.getElementById('display');
        this.modeElement = document.getElementById('mode');
    }

    updateDisplay(minutes, seconds) {
        // Format time and update this.displayElement
    }

    updateMode(modeName) {
        // Update the visual indicator of Work vs Break
    }
}

export default UI;
