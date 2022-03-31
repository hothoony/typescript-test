import { HasFormatter } from '../interfaces/HasFormatter'

export class Invoice implements HasFormatter {

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) {}

    format() {
        return `format => ${this.client} : ${this.details} : ${this.amount}`;
    }
}
