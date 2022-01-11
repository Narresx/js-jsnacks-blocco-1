console.log('JS OK');

// Traccia : Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0 // Portiamo fuori una costante numerica che andremmo poi a sommare
let valid = true // Poniamo una condizione vera in modo da poter controllare se l'utente ha scritto dei numeri
const displayElement = document.getElementById('result'); // Recuperiamo un elemento in pagina


for (let k = 0; k < 10; k++) { // Chiediamo 10 volte all'utente un numero
    const number = parseInt(prompt('Inserisci un numero', '3'));
    if (isNaN(number)) {  //Se number è un non numero allora la condizione diventa falsa
        valid = false
    } else {
        sum = sum + number;
    }
    console.log(sum);
}

// Scriviamo il risultato in pagina
if (valid) {
    displayElement.innerText = `La somma dei tuoi numeri è ${sum}`;
} else {
    displayElement.innerText = `Hai inserito elementi non validi!`;
}

