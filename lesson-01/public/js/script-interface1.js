"use strict";
(() => {
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
})();
