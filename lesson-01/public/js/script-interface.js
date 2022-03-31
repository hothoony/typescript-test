<<<<<<< HEAD
"use strict";
const me = {
    name: 'james',
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
=======
import { Invoice } from "./classes/Invoice";
(() => {
    let docOne = new Invoice('james', 'html', 100);
    let docTwo = new Invoice('steve', 'css', 200);
    let docs = [];
    docs.push(docOne);
    docs.push(docTwo);
    docs.forEach(doc => {
        console.log(doc.format());
    });
})();
>>>>>>> de750fe1a37bc82783f37832d6ba91ccf6504767
