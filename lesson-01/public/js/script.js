import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
(() => {
    const form = document.querySelector('.new-item-form');
    const type = document.querySelector('#type');
    const tofrom = document.querySelector('#tofrom');
    const details = document.querySelector('#details');
    const amount = document.querySelector('#amount');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let doc;
        if (type.value === 'invoice') {
            doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        }
        else {
            doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        }
        console.log(doc);
        const ul = document.querySelector('.item-list');
        // const ul = document.querySelector('ul')!;
        const list = new ListTemplate(ul);
        list.render(doc, type.value, 'start');
    });
})();
