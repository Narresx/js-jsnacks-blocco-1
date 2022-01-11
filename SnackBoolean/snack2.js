console.log('JS OK');

// Traccia : L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

const displayElement = document.getElementById('result');
const wordOne = prompt('Inserisci una parola qualsiasi').trim();
console.log(wordOne);
const wordTwo = prompt('Inserisci una parola qualsiasi').trim();
console.log(wordTwo);

let message = 'La parola più lunga è '

if (wordOne.length > wordTwo.length) {
    message += wordOne;
} else if (wordTwo.length > wordOne.length) {
    message += wordTwo;
} else {
    message = 'Le due parole sono ugualmente lunghe';
}

displayElement.innerHTML = message