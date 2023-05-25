//variabile promt utente pari o dispari
let utente = (prompt('Pari o Dispari?').toLowerCase());

//controllo inserimento utente
while(!(utente == 'pari' || utente == 'dispari')){
    utente=(prompt('Pari o Dispari?').toLowerCase())
};
console.log(utente)

//variabile numero
let num_utente = parseInt(prompt('scegli un numero da 1 a 5'));

//controllo inserimento utente
while(isNaN(num_utente) || num_utente<1 || num_utente>5){
    num_utente=parseInt(prompt('Inserisci un numero da 1 a 5'))
};
console.log(num_utente)

//variabile numero random computer
let num_computer = num_random(1, 5);
console.log(num_computer)

//variabile somma numero computer + numero utente
let somma = (num_computer + num_utente);
console.log(somma)

//funzione per generare numero random
function num_random(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
};

//funzione pari e dispari
function pari_dispari(somma){
    if(somma % 2 === 0){
        return ('pari')
    }
    

    else{
        return ('dispari')
    }
};


//stampa in console
if(utente === pari_dispari(somma)){
    console.log('hai vinto')
}

else{
    console.log('hai perso')
};
