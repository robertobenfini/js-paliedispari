//promt utente
let utente = (prompt('Inserisci una parola').toLowerCase())
console.log(utente)

//array
let array = utente.split('')
console.log(array)

//array reverse
let array_reverse = array.reverse('')
console.log(array_reverse)

//parola utente al contrario
let array_reverse_join = array_reverse.join('')
console.log(array_reverse_join)

//verifica palindroma
if(array_reverse_join === utente){
    console.log('Parola Palindroma')
}

else{
    console.log('Parola non Palindroma')
}