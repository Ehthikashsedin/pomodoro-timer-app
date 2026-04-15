class Timer {
    #intervalId = null;
    #secondsRemaining;
    #initialTime;

    constructor(duration = 25 * 60) {
        this.#secondsRemaining = duration;
        this.#initialTime = duration;
        this.onTick = () => { };
        this.onComplete = () => { };
    }

    start() {
        if (this.#intervalId) return;

        this.onTick(this.getTime());

        this.#intervalId = setInterval(() => {
            if (this.#secondsRemaining <= 0) {
                this.pause();
                this.onComplete();
                return;
            }

            this.#secondsRemaining--;
            this.onTick(this.getTime());

            if (this.#secondsRemaining === 0) {
                this.pause();
                this.onComplete();
            }
        }, 1000);
    }

    pause() {
        if (!this.#intervalId) return;

        clearInterval(this.#intervalId);
        this.#intervalId = null;
    }

    reset(duration = this.#initialTime) {
        this.pause();
        this.#initialTime = duration;
        this.#secondsRemaining = duration;
        this.onTick(this.getTime());
    }

    getTime() {
        const minutes = Math.floor(this.#secondsRemaining / 60);
        const seconds = this.#secondsRemaining % 60;

        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

export default Timer;
