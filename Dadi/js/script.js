
//Genero un numero casuale per il giocatore
const numRandom = Math.floor(Math.random() * 6) + 1;
console.log("Il tuo numero", numRandom);

//Genero un numero casuale per il pc
const numRandomPc = Math.floor(Math.random() * 6) +1;
console.log("Il numero del PC", numRandomPc);

//Confronto i punteggi e stampo il vincitore!
if(numRandom > numRandomPc){
    console.log("Hai vinto! :D");
}
else if(numRandomPc > numRandom) {
    console.log("Hai perso! Ha vinto il PC! :(");
} else {
    console.log("PAREGGIO! Aggiorna la pagina e rifallo!");
}