//1.1 Types simples

const name = 'Jacques';
let age = 80;
let useless = 'something';

console.log(name, age, useless);

//En const, il est impossible de revoir la valeur d'une variable,
//il faut donc la passer en let pour age & useless
age += 1;
useless = 14;

console.log(name, age, useless);

//----------------------//
//1.2 Tableaux


//Il n'y a pas d'erreur ici, car on alimente une variable const en tableau,
//on ne la modifie pas
const fruits = ['apple', 'pear', 'cherry'];
const vegetables = ['potato', 'curlyflower', 'tomato'];

console.log(fruits, vegetables);

fruits.push('banana');
vegetables.pop();

console.log(fruits, vegetables);

//----------------------//
//1.3 Objets

const settings = {
    sound: true,
    music: false,
    graphics: 'high',
    resolution: [1920, 1080]
};

//Là encore, pour settings, la variable const fonctionne car elle n'est pas
//modifiée, il s'agit d'un paramètre de base. En revanche, lors d'une
//savegame, les valeures de la variable sont modifiés et cela créer l'érreur.
let savedGame = {
    time: 384,
    score: 47,
    opponent: 'Lolo'
};

console.log(settings, savedGame);

savedGame = {};
settings.music = true;
settings.resolution = [3840, 2160];

console.log(settings, savedGame);
