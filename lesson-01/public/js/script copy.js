import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
(() => {
    const form = document.querySelector('.new-item-form');
    const type = document.querySelector('#type');
    const tofrom = document.querySelector('#tofrom');
    const details = document.querySelector('#details');
    const amount = document.querySelector('#amount');
    tofrom.value = 'aa';
    details.value = 'bb';
    amount.valueAsNumber = 200;
    // tuple
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    doc = new Invoice(...values);
    console.log(doc);
    doc = new Payment(...values);
    console.log(doc);
})();
