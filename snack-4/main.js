/* Crea un array vuoto.
CHiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo
nell'array */

let numbers =[]

for (let index = 0; index <= 6; index++) {
    insertNumb = Number (prompt("Inserisci un numero. es 1,2,3"))

    if( insertNumb % 2 != 0 ){
        numbers.push(insertNumb);
    }
    else{
        console.log( `${insertNumb} è un numero pari`);
        
    }
}

console.log(numbers);
