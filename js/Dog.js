export class Dog {
    constructor(name, fur) {
        this.name = name;
        this.fur = fur;
        this.legs = 4;
        this.bones = 0;
        this.eatenBones = 0;
    }

    hi() {
        return `Sveiki, as ${this.name}!`;
    }
    intro() {
        return `Sveiki, as ${this.name}. Esu ${this.fur} spalvos. duok ${this.legs} eur`;
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