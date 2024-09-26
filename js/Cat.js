import { Pet } from "./Pet.js";

export class Cat extends Pet{
    constructor(name, color) {
        super(name, color);
        this.fish = 0;
        this.eatenfish = 0;
        this.sound = 'miau';
    }

    giveFish(fishCount) {
        if (typeof fishCount !== 'number'
            || !isFinite(fishCount)
            || fishCount < 1) {
            return 'normalu skaiciu irasyk';
        }
        this.fish += fishCount;
        return `${this.name} gavo ${fishCount} zuvi, visu zuvu kiekis: ${this.fish}.`;
    }
    eat() {
        if (this.fish >= 1) {
            this.eatenfish++;
            this.fish--
            return `${this.name} suvalge zuvi. liko ${this.fish}.`
        }
        return 'nera ko valgyti'
    }
    fishLeft() {
        return  `${this.name} isviso suvalge ${this.eatenfish} zuvi.`;
    }
}
