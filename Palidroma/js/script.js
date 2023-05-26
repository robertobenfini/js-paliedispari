//promt utente
let utente = (prompt('Inserisci una parola').toLowerCase());
console.log(utente)

//richiamo funzione
checkPalindroma(utente);

//funzione palindroma
function checkPalindroma(parola){
    
    let palindroma = parola.split('').reverse().join('');
    
    if(palindroma === parola){
        console.log('Parola Palindroma')
    }
    
    else{
        console.log('Parola non Palindroma')
    }
};