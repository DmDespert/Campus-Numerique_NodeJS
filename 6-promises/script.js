// Fonction utilisées par les fonctions de l'exercice - Ne pas modifier ou appeler directement
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Note : les fonctions ci-dessous sont prêtes à l'emploi, vous n'avez pas à les modifier, juste à les appeler.
// Elles retournent toutes des promesses et peuvent donc être chaînées via la fonction "then".
function first() {
  return sleep(300).then(() => {console.log('message 1');});
}

function second() {
  return sleep(100).then(() => {console.log('message 2');});
}

function third() {
  return sleep(200).then(() => {console.log('message 3');});
}

function secondWithError() {
  return sleep(100).then(() => {throw new Error("catch me if you can");})
}

/*
first();
second();
third();
 */

//L'ordre des messages dans le console log s'affiche de cette façon : 2 3 1.
//Il s'agit du paramêtre ms qui donne le temps de réponse à une fonction, la fonction 1
//aillant pour temps de réponse 300ms, il passe en dernier.

first().then(()=> {
  return new Promise((success, fail) => {
    if(Math.random() > .5)
      success();
    else
      fail();
  })
})
    .then(()=>second())
    .catch(()=>secondWithError())
    .then(() => third())