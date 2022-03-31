<<<<<<< HEAD
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(b: number): number;
}

const me: IsPerson = {
    name: 'james',
    age: 20,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(amount);
        return amount;
    }
}

const greetPerson = (person: IsPerson) => {
    console.log('hello ', person.name);
}

greetPerson(me);
=======
import { Invoice } from "./classes/Invoice";
import { Payment } from './classes/Payment'
import { HasFormatter } from './interfaces/HasFormatter'

(() => {

    let docOne: HasFormatter = new Invoice('james', 'html', 100);
    let docTwo: HasFormatter = new Invoice('steve', 'css', 200);

    let docs: HasFormatter[] = [];
    docs.push(docOne);
    docs.push(docTwo);

    docs.forEach(doc => {
        console.log(doc.format());
    });

})();
>>>>>>> de750fe1a37bc82783f37832d6ba91ccf6504767
