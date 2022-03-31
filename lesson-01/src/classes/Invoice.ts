export class Invoice {

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `format => ${this.client} : ${this.details} : ${this.amount}`;
    }
}