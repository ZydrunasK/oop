/* 
OOP - object oriented programming
- turi savybes
- turi funkcionaluma, kuris manipulioja savo savybemis
*/

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

console.clear();

const kurkis = new Cat('Kurkis', 'grey');
console.log(kurkis.hi());
console.log(kurkis.intro());




