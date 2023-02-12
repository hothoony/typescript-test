
// Tuple
// Enum
// Unknown
// Any
// Null and Undefined
// Never

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

console.log('--------------------------------');

// Object
let object1: object = {name: 'paul', age: 20};
console.log('object1', object1);

console.log('--------------------------------');

// Array
let numberArray: number[] = [11, 22, 33];
console.log('numberArray', numberArray);

let stringArray: string[] = ['aa', 'bb', 'cc'];
console.log('stringArray', stringArray);

let objectArray: object[] = [
    {name: 'paul', age: 20},
    {name: 'jack', age: 22},
];
console.log('objectArray', objectArray);

console.log('--------------------------------');

// Void
function noReturnFunction(): void {
    console.log('noReturnFunction has no return value')
}
noReturnFunction();

console.log('--------------------------------');
