import { Invoice } from "./classes/Invoice";
import { Payment } from './classes/Payment'
import { HasFormatter } from './interfaces/HasFormatter'

(() => {

    let docOne: HasFormatter = new Invoice('james', 'html', 100);
    let docTwo: HasFormatter = new Invoice('steve', 'css', 200);

    let docs: HasFormatter[] = [];
    docs.push(docOne);
    docs.push(docTwo);

    docs.forEach(doc => {
        console.log(doc.format());
    });

})();
