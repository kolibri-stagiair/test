class Hall {
    constructor(id) {
        this.id = id; // Unique numerical ID for the hall
        this.verticalHalls = []; // Array to hold vertically connected halls
        this.horizontalHalls = []; // Array to hold horizontally connected halls


    }

    // Method to add a vertically connected hall
    addVerticalHall(hall) {
        if (!this.verticalHalls.includes(hall)) {
            this.verticalHalls.push(hall);
        }
    }


    // Method to add a horizontally connected hall
    addHorizontalHall(hall) {
        if (!this.horizontalHalls.includes(hall)) {
            this.horizontalHalls.push(hall);
        }
    }

    // Method to get all connected halls (both vertical and horizontal)
    getConnectedHalls() {
        return {
            vertical: this.verticalHalls,
            horizontal: this.horizontalHalls
        };
    }

    // Method to display hall details
    display() {
        console.log(`Hall ID: ${this.id}`);
        console.log(`Vertically connected halls: ${this.verticalHalls.map(h => h.id).join(', ')}`);
        console.log(`Horizontally connected halls: ${this.horizontalHalls.map(h => h.id).join(', ')}`);
    }
}

