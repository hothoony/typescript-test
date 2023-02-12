## Typescript features
- javascript superset
- use strict type
- support modern feature
- extra feature

## Typescript 설치하기
```bash
## 설치
$ sudo npm install typescript -g

## 삭제
$ sudo npm uninstall typescript -g

## 버전 확인
$ tsc -v
```

## Typescript 파일 생성
```bash
# 확장자는 .ts
script.ts
```

## Typescript 컴파일
- `tsc` TypeScript Compiler
- `tsc` 명령어를 사용해서 컴파일하면 `.ts` 파일이 `.js` 로 변환된다
```bash
## script.js 파일로 컴파일
$ tsc script.ts

## script-bundle.js 파일로 컴파일
$ tsc script.ts --outFile script-bundle.js
```
```bash
## watch mode
## .ts 파일이 수정되면 .js 파일로 자동 컴파일한다
$ tsc script.ts -w
[10:21:31 AM] Starting compilation in watch mode...
[10:21:32 AM] Found 0 errors. Watching for file changes.
```

## Typescript config
- `tsconfig.json` 생성
    ```
    $ tsc --init
    ```

- `tsconfig.json` 설정
    ```javascript
    {
    "compilerOptions": {
        /* Visit https://aka.ms/tsconfig.json to read more about this file */

        /* Projects */

        /* Language and Environment */
        "target": "es2016",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */

        /* Modules */
        "module": "commonjs",                                /* Specify what module code is generated. */
        "rootDirs": ["./src"],                                   /* Allow multiple folders to be treated as one when resolving modules. */

        /* JavaScript Support */

        /* Emit */
        "outDir": "./public/js",                                   /* Specify an output folder for all emitted files. */

        /* Interop Constraints */
        "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */
        "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */

        /* Type Checking */
        "strict": true,                                      /* Enable all strict type-checking options. */

        /* Completeness */
        "skipLibCheck": true                                 /* Skip type checking all .d.ts files. */
    },
    "include": ["src"]
    }
    ```

- `tsconfig.json` 을 이용해서 compile
    ```bash
    $ tsc

    ## watch
    $ tsc -w
    ```

## Visual Studio Code 에서 .ts 파일 바로 실행하기

1. `sourceMap: true` 활성화
    ```json
    // tsconfig.json

    "compilerOptions": {
        // ...
        "sourceMap": true,
        // ...
    }
    ```

1. command + shift + B
    - `tsc: watch - tsconfig.json` 선택

1. `F5` 를 눌러서 디버깅 실행

1. `DEBUG CONSOLE` 에서 확인


## type 정의
```typescript
// explicit types
let userName: string;
let userAge: number;
let isLogin: boolean;

// array
let ary0: string[] = [];
let ary1: number[] = [];
let ary2: boolean[] = [];

let ary3: object[] = [];
let ary4: {}[] = [];
let ary5: {name: string, age: number}[] = [];

// union type
let mixed: (string|number|boolean)[] = [];
let uid: string|number;
let uid2: (string|number);

// object
let user: {
    name: string,
    age: number,
    isLogin: boolean
};

// any
let age: any;

let mixed: any[] = [];

let mixed: {name: any, age: any};

// Function
let greet: Function;
const echo0: Function = (a:number, b:number | string): void => {}
const echo1: Function = (a:number, b?:number | string): void => {} // optional
const echo2: Function = (a:number, b: number | string = 0): void => {} // default value
```


## type alias
```typescript
// 새로운 타입을 정의
type stringOrNumber = string | number;
type userObj = {name: string, uid: stringOrNumber};

const logDetails = (uid: stringOrNumber, item: string) => { // 타입 사용
    console.log(`logDetails ${item} ${uid}`);
}

const greetHello = (user: userObj) => { // 타입 사용
    console.log(`greetHello ${user.name}`);
}
```

## DOM type casting
```javascript
// 끝에 느낌표(!) 를 추가
const anchor3 = document.querySelector('a')!;
```
```typescript
// as 로 타입 캐스팅
const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
});
```

## class 사용

```typescript
// class 정의

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
```

```typescript
// class 사용

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
```

## access modifier
- `public`
- `private`
- `readonly`
```typescript
class Invoice {
    // class 안에서 정의
    readonly client: string;
    private details: string;
    public amount: number;

    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    ...
}
```
```typescript
class Invoice {
  
  constructor(
        // constructor 안에서 정의
        readonly client: string,
        private details: string,
        public amount: number
    ) {}
    ...
}
```

## interface
```typescript
interface HasFormatter {
    format(): string;
}
```

## module 사용
- tsconfig.json 설정
```json
"target": "es6",
"module": "es2015",
```
- module 정의 `export`
```typescript
// src/classes/Invoice.ts
export class Invoice {
}
```
- module 사용 `import`
```typescript
// src/script.ts
import { Invoice } from "./classes/Invoice.js"; // .js 로 추가
```
- `script` 태그에 `type="module"` 추가
```html
<!-- index.html -->
<script type="module" src="js/script.js"></script>
```

## generic
```typescript
const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
```
```typescript
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const doc3: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'james' }
}

const doc4: Resource<string[]> = {
    uid: 2,
    resourceName: 'colors',
    data: ['red', 'green', 'blue']
}
```

## tuple
```typescript
let values: [string, string, number];
values = [tofrom.value, details.value, amount.valueAsNumber];
```
