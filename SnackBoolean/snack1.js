console.log('JS OK');

// Traccia : L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

const displayElement = document.getElementById('result');
const numberOne = parseInt(prompt('Inserisci un numero qualsiasi'));
console.log(numberOne);
const numberTwo = parseInt(prompt('Inserisci un numero qualsiasi'));
console.log(numberTwo);

let message = 'Il numero più grande è '

if (numberOne > numberTwo) {
    message += numberOne;
} else if (numberTwo > numberOne) {
    message += numberTwo;
} else {
    message = 'I due numeri sono uguali.';
}

displayElement.innerHTML = message