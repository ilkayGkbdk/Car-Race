class Controls {
    constructor(controlType) {
        this.forward = controlType === "DUMMY";
        this.left = false;
        this.backward = false;
        this.right = false;

        if (controlType === "KEY") {
            this.#addEventListeners();
        }
    }

    #addEventListeners() {
        document.addEventListener('keydown', (evt) => {
            switch (evt.key) {
                case "w":
                    this.forward = true;
                    break;
                case "a":
                    this.left = true;
                    break;
                case "s":
                    this.backward = true;
                     break;
                case "d":
                    this.right = true;
                    break;
            }
        });
        document.addEventListener('keyup', (evt) => {
            switch (evt.key) {
                case "w":
                    this.forward = false;
                    break;
                case "a":
                    this.left = false;
                    break;
                case "s":
                    this.backward = false;
                    break;
                case "d":
                    this.right = false;
                    break;
            }
        });
    }
}