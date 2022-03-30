"use strict";
const logDetails = (uid, item) => {
    console.log(`logDetails ${item} ${uid}`);
};
const greetHello = (user) => {
    console.log(`greetHello ${user.name}`);
};
const greetHelloAgain = (user) => {
    console.log(`greetHelloAgain ${user.name}`);
};
logDetails('uid01', 'james');
greetHello({ name: 'james', uid: 11 });
greetHelloAgain({ name: 'james', uid: 11 });
