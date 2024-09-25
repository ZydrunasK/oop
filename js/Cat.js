export class Cat {
    constructor(name, fur) {
        this.name = name;
        this.fur = fur;
        this.legs = 4;
    }

    hi() {
        return `Sveiki, as ${this.name}!`;
    }
    intro() {
        return `Sveiki, as ${this.name}. Esu ${this.fur} spalvos. duok ${this.legs} eur`;
    }
}

/*
CAR
- brandas
- modelis
- kuro bako talpa
- kuro sanaudos 100km

- ijungtiVarykli()
- isjungtiVarykli()
- vaziuoti(atstumas)
- uzpiltiKuro(litrai)
- kiekLikoKuroBake()
- kokiAtstumaGaliDarNuvaziuoti()
- arGaliPrivaziuotiDegaline(atstumas km)
*/