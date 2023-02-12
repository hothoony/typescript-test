export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `format => ${this.recipient} : ${this.details} : ${this.amount}`;
    }
}
//# sourceMappingURL=Payment.js.map