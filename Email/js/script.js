
//Creo Lista autorizzata
const mailAutorizzate = ["utente1@gmail.com", "utente2@gmail.com", "utente3@gmail.com"]

//Chiedere mail all'utente
const UtenteEmail = prompt("Inserisci la tua email:")

//Creo variabile per salvare l'accesso non autorizzato fin quando non è presente nella array
let accessoOk = false;

//Controllo se la mail è presente nella lista
for(let i = 0; i < mailAutorizzate.length; i++){
    if (mailAutorizzate[i] === UtenteEmail) {
        accessoOk = true;
        break;
    }
}

if(accessoOk){
    console.log("Accesso OK");
}
else {
    console.log("Accesso NEGATO");
}
