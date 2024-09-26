export class Car {
    constructor(brand, model, tankSize, fuelConsumption) {
        this.brand = brand;
        this.model = model;
        this.tankSize = tankSize;
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
        return `Remaining fuel: ${(this.fuel).toFixed(2)}L`
    }
    fillFuel(amount) {
        if (typeof amount === 'number'
            ?? isFinite(amount)
            ?? amount > 0) {
            if (this.fuel + amount >= this.tankSize) {
                const prevFuel = this.fuel;
                this.fuel = this.tankSize;
                return `Filled ${(this.tankSize - prevFuel).toFixed(2)}L, the tank is full`; 
            }
            if (this.fuel + amount < this.tankSize) {
                this.fuel += amount;
                return `filled ${amount.toFixed(2)}L, current fuel: ${(this.fuel).toFixed(2)}L`
            }
        }
        return 'Insert a normal number';
    }
    remainingRange() {
        return `Remaining range is ${((this.fuel / this.fuelConsumption) * 100).toFixed(2)}km`
    }
    canItReachGasStation(distance) {
        if (typeof distance === 'number'
            ?? isFinite(distance)
            ?? distance > 0) {
                const range = ((this.fuel / this.fuelConsumption) * 100).toFixed(2);
                if (range >= distance) {
                    return `Yes you can`;
                }
        }
        return `Distance must be a normal number in km, without notations`
    }
    drive(distance) {
        const range = ((this.fuel / this.fuelConsumption) * 100).toFixed(2);
        if (typeof distance === 'number'
            ?? isFinite(distance)
            ?? distance > 0) {
                if (range >= distance) {
                    this.fuel -= (distance * (11/100));
                    return `distance driven ${distance}km`;
                }
                if (range < distance) {
                    return 'not enough fuel for this trip';
                }
        }
        return `Distance must be a normal number in km, without notations`
    }
}