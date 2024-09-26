export class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.legs = 4;
        this.eyes = 2;
        this.sound = 'MIAU WUF';
    }
    hi() {
        return `${this.sound} Sveiki, as ${this.name}! ${this.sound}`;
    }
    intro() {
        return `Sveiki, as ${this.name}. Esu ${this.color} spalvos. duok ${this.legs} eur`;
    }
}