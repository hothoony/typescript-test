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
