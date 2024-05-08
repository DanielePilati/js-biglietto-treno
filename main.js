'use strict';

let distance = Number(prompt('inserisci km da percorrere'));
let age = parseInt(Number(prompt('inserisci la tua età')));
const rate = 0.21;

console.log(distance);
console.log(age);

if (!isNaN(age) && !isNaN(distance)) {
    let price = distance * rate; 
    console.log(`per ${distance} km il costo base del biglietto è di ${price} Euro`);

    if (age < 18) {
        price = price / 1.20;
        console.log('sei minorenne e hai diritto al 20% di sconto');

    } else if (age > 65) {
        price = price / 1.40;
        console.log('sei over 65 e hai diritto al 40% di sconto');
    } else {
        console.log('non hai diritto a nessun tipo di sconto');
    }
    console.log(`l'importo finale del biglietto è di ${price.toFixed(2)} Euro`); 
    document.getElementById('final-price').innerHTML = `il prezzo del tuo biglietto è di ${price.toFixed(2)} Euro`;
    
} else {
    console.log('inserisci numeri');
}





