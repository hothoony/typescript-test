class Invoice {

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `format => ${this.client} : ${this.details} : ${this.amount}`;
    }
}

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
