## Typescript features
- javascript superset
- use strict type
- support modern feature
- extra feature

## Typescript install
```bash
## 설치
$ sudo npm install typescript -g

## 삭제
$ sudo npm uninstall typescript -g

## 버전 확인
$ tsc -v
```

## typescript 파일 생성
```bash
## 확장자는 .ts
script.ts
```

## typescript 컴파일
- `tsc` TypeScript Compiler
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

## tsc init
- `tsconfig.json` 파일 생성
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

## type alias
```typescript
// 새로운 타입을 정의
type stringOrNumber = string | number;
type userObj = {name: string, uid: stringOrNumber};

const logDetails = (uid: stringOrNumber, item: string) => {
    console.log(`logDetails ${item} ${uid}`);
}

const greetHello = (user: userObj) => {
    console.log(`greetHello ${user.name}`);
}
```
