/* il software deve chiedere per 10 volte all'utente di inserire un numero
il programma stampa la somma di tutti i numeri inseriti. */

let sum = 0

for (let index = 0; index <= 10; index++) {
    let number = Number (prompt("Inserisci un numero es. 1,2,3"));

    sum = sum += number;
    
}

console.log(sum);
