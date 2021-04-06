//4.1 Découverte

const [a, b] = [1, 2, 3, 4];
console.log(a);
console.log(b);

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35};
console.log(first);
console.log(last);
console.log(age);
//4.2 Application

//console.log(data);

//J'initialise une variable objet vide
let object = {};

//Avec la for, je décompose l'objet pour récupérer les données
for(const [key, value] of Object.entries(data)) {

    //Je les replace dans un objet de la façon suivante
    //(je pourrais aussi stocker dans des variables) :
    object[key] = {
        perturbation: value.texte,
        debut: value.dateDebut,
        fin: value.dateFin
    }
}

//Je peux afficher mon objet avec ses propriétées
console.log(object)

//Et même redécomposer l'objet créé avec une autre méthode for
for(const key in object) {
    console.log(object[key].perturbation);
    console.log(object[key].debut);
    console.log(object[key].fin);
}