/* 
OOP - object oriented programming
- turi savybes
- turi funkcionaluma, kuris manipulioja savo savybemis
*/

import { Car } from "./js/Car.js";
import { Cat } from "./js/Cat.js";
import { Dog } from "./js/Dog.js";


const reksas = new Dog('Reksas', 'black');
console.log(reksas.giveBone(5));

const bona = new Dog('Bona', 'brown');
console.log(bona.giveBone(1));
console.log(bona.giveBone(0.5));
console.log(bona.eat());
console.log(bona.eat());
console.log(bona.eat());
console.log(bona.bonesLeft());
console.log(bona.bones);

// console.clear();

const kurkis = new Cat('Kurkis', 'grey');
console.log(kurkis.hi());
console.log(kurkis.intro());

// console.clear();

// const bmw = new Car('BMW', 'M3 GTR', 63, 11);
// console.log(bmw.startEngine());
// console.log(bmw.checkFuel());
// console.log(bmw.fillFuel(2.533333));
// console.log(bmw.fillFuel(65));
// console.log(bmw.checkFuel());
// console.log(bmw.remainingRange());
// console.log(bmw.drive(600));
// console.log(bmw.drive(234));
// console.log(bmw.checkFuel());
// console.log(bmw.remainingRange());









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