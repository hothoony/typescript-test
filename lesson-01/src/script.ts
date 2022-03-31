import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice('aa', 'bb', 11);
const invTwo = new Invoice('cc', 'dd', 22);
console.log(invOne, invOne.format());
console.log(invTwo, invTwo.format());

invTwo.amount = 33;
console.log(invTwo, invTwo.format());

const invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
