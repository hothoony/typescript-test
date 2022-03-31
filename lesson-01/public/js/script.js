"use strict";
(() => {
    class Invoice {
        constructor(c, d, a) {
            this.client = c;
            this.details = d;
            this.amount = a;
        }
        format() {
            return `${this.client} : ${this.details} : ${this.amount}`;
        }
    }
    const invOne = new Invoice('aa', 'bb', 11);
    const invTwo = new Invoice('cc', 'dd', 22);
    console.log(invOne, invOne.format());
    console.log(invTwo, invTwo.format());
    invTwo.amount = 33;
    console.log(invTwo, invTwo.format());
    const invoices = [];
    invoices.push(invOne);
    invoices.push(invTwo);
    console.log(invoices);
    invoices.forEach(inv => {
        console.log(inv.client, inv.amount, inv.format());
    });
})();
