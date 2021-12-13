// EMAIL

// creo l'ARRAY delle email
const email = ['uno@gmail.com', 'due@yahoo.it', 'tre@gmail.com'];

// chiedo all'utente la sua email con un PROMPT
let userEmail= prompt('Scrivi la tua email');

// creo una variabile (flag) con valore FALSE da attribuire in base al risultato che otterrò dal controllo
let flag = false;

// creo un ciclo FOR che esegua il controllo dell'email, se l'email dell'utente corrisponde ad una di quelle dell'array modificherò mia variabile (flag) in TRUE.
for(let i = 0; i < email.length; i++) {
    if(userEmail === email[i]) {
        flag = true;
    }
}

// chiuso il ciclo for, SE l'email dell'utente risulta "vera" sarà presemte all'interno della lista
// ALTRIMENTI sarà "falsa" e quindi non sarà presente all'interno della lista

if(flag) {
    console.log(`${userEmail} fa parte della lista`);
} else {
    console.log(`${userEmail} non fa parte della lista`);
}



// DADI

// attribuisco un numero casuale all'utente e uno al computer con due variabili
let userNumber = Math.floor(Math.random() *6) + 1;
let computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);
console.log(computerNumber);
// creo un ciclo di IF, SE la prima variabile è maggiore della seconda vince l'utente, ALTRIMENTI vince il computer
if(userNumber === computerNumber) {
    console.log(`Pareggio ${computerNumber} a ${userNumber}`);
} else if(userNumber > computerNumber) {
    console.log(`Vince l'utente ${userNumber} a ${computerNumber}`);
} else {
    console.log(`Vince il computer ${computerNumber} a ${userNumber}`);
}

// aggiungo all'if il pareggio!