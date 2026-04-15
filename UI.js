

class UI {
    constructor() {
        this.displayElement = document.getElementById('display');
        this.modeElement = document.getElementById('mode');
    }

    updateDisplay(timeString) {
        this.displayElement.textContent = timeString;
    }

    updateMode(modeText) {
        this.modeElement.textContent = modeText;
    }
}

export default UI;
