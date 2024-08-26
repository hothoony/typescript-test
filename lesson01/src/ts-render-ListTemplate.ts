import { Invoice } from './classes/Invoice';
import { Payment } from './classes/Payment';
import { HasFormatter } from './interfaces/HasFormatter'
import { ListTemplate } from './classes/ListTemplate';

(() => {

    const form = document.querySelector('.new-item-form') as HTMLFormElement;

    const type = document.querySelector('#type') as HTMLSelectElement;

    const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
    const details = document.querySelector('#details') as HTMLInputElement;
    const amount = document.querySelector('#amount') as HTMLInputElement;

    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        let doc: HasFormatter;
        if (type.value === 'invoice') {
            doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
        } else {
            doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
        }

        console.log(doc);

        const ul = document.querySelector('.item-list') as HTMLUListElement;
        // const ul = document.querySelector('ul')!;
        const list = new ListTemplate(ul);
        list.render(doc, type.value, 'start');
    });
   
})();
