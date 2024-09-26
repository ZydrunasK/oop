import { Pet } from "./Pet.js";

export class Dog extends Pet{
    constructor(name, color) {
        super(name, color);
        this.bones = 0;
        this.eatenBones = 0;
        this.sound = 'wuf';
    }

    giveBone(bonesCount) {
        if (typeof bonesCount !== 'number'
            || !isFinite(bonesCount)
            || bonesCount < 1) {
            return 'normalu skaiciu irasyk';
        }
        this.bones += bonesCount;
        return `${this.name} gavo ${bonesCount} kaulus, visu kaulu kiekis: ${this.bones}.`;
    }
    eat() {
        if (this.bones >= 1) {
            this.eatenBones++;
            this.bones--
            return `${this.name} suvalge kaula. liko ${this.bones}.`
        }
        return 'nera ko valgyti'
    }
    bonesLeft() {
        return  `${this.name} isviso suvalge ${this.eatenBones} kaulus.`;
    }
}