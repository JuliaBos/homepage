// JS es ES6 ECMASCRIPT 6+

const firstName = 'Julia';

console.log(`Czesc! Nazywam sie ${firstName}. Milo Cie widziec :D`); //`` backtick/backquote
alert(`Czesc! Nazywam sie ${firstName}. Milo Cie widziec :D`);

const header = document.querySelector('h1')

console.log(header)

const contentJs = document.querySelector('.my-article__paragraph--js');
contentJs.innerHTML = 'Jestem wypelniony javascriptem 🤯'

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed 💥`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    commander: {
        name: 'darth vader'
    }

}

console.log(deathStar);                     //show all keys  {diameter: 120000, isOperating: true, levels: 357, name: 'Death Star', fire: ƒ, …}
console.log(deathStar.name);                //Death Star
console.log(deathStar.commander);           //shows key with its value   {name: 'darth vader'}
console.log(deathStar.commander.name);      //darth vader


//M05L08: IMMUTABILITY W OBIEKTACH:

/*const humanOne = {
    name: 'Maciek',
    age: 32
}

const humanTwo = {
    name: 'Stefan',
    age: 32
}

console.log(humanOne);          //{name: 'Maciek', age: 32}
console.log(humanTwo);          //{name: 'Stefan', age: 32}

humanTwo.age = 35;              //we change the value age from humanTwo

console.log(humanTwo);          //{name: 'Stefan', age: 35}*/


const humanOne = {
    name: 'Maciek',
    age: 32
}

const humanTwo = humanOne;

console.log(humanOne);          //{name: 'Maciek', age: 32}


humanTwo.age = 35;

console.log(humanOne);          //{name: 'Maciek', age: 35}
console.log(humanTwo);          //{name: 'Maciek', age: 35}