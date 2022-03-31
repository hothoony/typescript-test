(() => {

    class Invoice {
        client: string;
        details: string;
        amount: number;
    
        constructor(c: string, d: string, a: number) {
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
    
    invTwo.client = 'ee';
    console.log(invTwo, invTwo.format());
    
    const invoices: Invoice[] = [];
    invoices.push(invOne);
    invoices.push(invTwo);
    console.log(invoices);
    
})();
