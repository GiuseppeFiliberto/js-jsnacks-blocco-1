/* L'utente inserisce due parole in successione con due prompt.
Il software stampa la prima parola più corta, poi la parola più lunga */


const firstWord = prompt("Scrivi una parola a caso");
const secondWord = prompt("Scrivine un'altra");

if (firstWord.length > secondWord.length){
    console.log(`${firstWord} è una parola più lunga di ${secondWord}`);
} 
else if (firstWord.length < secondWord.length) {
    console.log(`${secondWord} è una parola più lunga di ${firstWord}`);
}