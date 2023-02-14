
// Tuple
// Enum
// Unknown
// Any
// Null and Undefined
// Never

/*

:string
:number
:boolean

:string[]
:Array<string>
:number[]
:Array<number>

:string | number
:void
:any
:never

*/

console.log('types');
console.log('--------------------------------');

// Boolean
let isDone: boolean = false;
console.log('isDone', isDone);

let isSuccess: boolean = true;
console.log('isSuccess', isSuccess);

// String
let typeString: string = 'aa';
console.log('typeString', typeString);

// Number
let typeNumber: number = 99;
console.log('typeNumber', typeNumber);

let strOrNum: string | number;
strOrNum = 'true';
console.log('strOrNum', strOrNum);
strOrNum = 1;
console.log('strOrNum', strOrNum);
// strOrNum = true; // error

console.log('--------------------------------');

// Array
let numberArray: number[] = [11, 22, 33];
console.log('numberArray', numberArray);

let numberArray2: Array<number> = [11, 22, 33];
console.log('numberArray2', numberArray2);

let stringArray: string[] = ['aa', 'bb', 'cc'];
console.log('stringArray', stringArray);

let stringArray2: Array<string> = ['aa', 'bb', 'cc'];
console.log('stringArray2', stringArray2);

let objectArray: object[] = [
    {name: 'paul', age: 20},
    {name: 'jack', age: 22},
];
console.log('objectArray', objectArray);

console.log('--------------------------------');

// Tuple
let tuple: [string, number] = ['paul', 20];
console.log('tuple', tuple);

console.log('--------------------------------');

// Void
function noReturnFunction(): void {
    console.log('noReturnFunction has no return value')
}
noReturnFunction();

console.log('--------------------------------');

// Object
let object1: object = {name: 'paul', age: 20};
console.log('object1', object1);

let object2: {name: string, age: number} = {name: 'paul', age: 20};
console.log('object2', object2);

function fn1(object: {name: string, age: number}): {result: boolean} {
    return {result: true};
}

let options: {
    labels: string[],
    dataset1: {
        label: string,
        data: any[],
    },
    dataset2: {
        label: string,
        data: Array<any>,
    },
};

console.log('--------------------------------');

// interface, Type

interface IUser {
    name: string,
    age: number,
}

type UserType = {
    name: string,
    age: number,
}

let user1: IUser = {name: 'paul', age: 20};
let user2: UserType = {name: 'paul', age: 20};;

 console.log('user1', user1);
 console.log('user2', user2);
