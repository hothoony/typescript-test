export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `format => ${this.client} : ${this.details} : ${this.amount}`;
    }
}
//# sourceMappingURL=Invoice.js.map