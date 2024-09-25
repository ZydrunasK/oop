export class Car {
    constructor(brand, model, tankSize, fuelConsumption) {
        this.brand = brand;
        this.model = model;
        this.modetankSize = tankSize;
        this.fuelConsumption = fuelConsumption;
    }
    fuel = 0;
    engineOn = false;
    startEngine() {
        if(!this.engineOn) {
            this.engineOn = true;
            return 'Engine started successfully'
        }
        return 'Engine is already on';
    }
    stopEngine() {
        if(this.engineOn) {
            this.engineOn = false;
            return 'Engine stopped successfully'
        }
        return 'Engine is already off';
    }
    checkFuel() {
        return `Remaining fuel: ${this.fuel} L`
    }
    fillFuel(amount) {
        if (typeof amount === 'number'
            ?? isFinite(amount)
            ?? amount > 0) {
            
        }
    }
}