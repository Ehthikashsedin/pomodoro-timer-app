

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
        if (modeText === 'Work Mode') {
            this.modeElement.style.color = 'red';
        } else {
            this.modeElement.style.color = 'green';
        }
    }
}

export default UI;
