export class Car {
    constructor(brand, model, tankSize, fuelConsumption) {
        this.brand = brand;
        this.model = model;
        this.modetankSize = tankSize ?? 100;
        this.fuelConsumption = fuelConsumption ?? 8;
    }

}