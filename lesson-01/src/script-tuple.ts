import { HasFormatter } from './interfaces/HasFormatter';
import { Invoice } from './classes/Invoice'
import { Payment } from './classes/Payment'

(() => {

    const form = document.querySelector('.new-item-form') as HTMLFormElement;

    const type = document.querySelector('#type') as HTMLSelectElement;
    const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
    const details = document.querySelector('#details') as HTMLInputElement;
    const amount = document.querySelector('#amount') as HTMLInputElement;

    tofrom.value = 'aa';
    details.value = 'bb';
    amount.valueAsNumber = 200;

    // tuple
    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;

    doc = new Invoice(...values);
    console.log(doc);

    doc = new Payment(...values);
    console.log(doc);
   
})();
