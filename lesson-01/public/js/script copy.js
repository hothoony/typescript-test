import { Invoice } from "./classes/Invoice.js";
let docOne = new Invoice('james', 'html', 100);
let docTwo = new Invoice('steve', 'css', 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
docs.forEach(doc => {
    console.log(doc.format());
});
// const invOne = new Invoice('aa', 'bb', 11);
// const invTwo = new Invoice('cc', 'dd', 22);
// console.log(invOne, invOne.format());
// console.log(invTwo, invTwo.format());
// invTwo.amount = 33;
// console.log(invTwo, invTwo.format());
// const invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// console.log(invoices);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// });
