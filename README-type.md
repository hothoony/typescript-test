### 기본 타입
```javascript
string
number
boolean
```

### array 타입
```javascript
string[]
number[]
```

### object 타입
```javascript
obj: {first: string, last?: string}
```

### any 타입
```javascript
:any
```

### 유니언 타입
```javascript
id: number | string

x: string | string[]
```

## 타입, 인터페이스

### 타입
```javascript
type Point = {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log(pt.x, pt.y);
}

printCoord({ x: 100, y: 100});
```

### 인터페이스
```javascript
interface: Point {
  x: number;
  y: nubmer;
}

function printCoord(pt: Point) {
  console.log(pt.x, pt.y);
}

printCoord({ x: 100, y: 100});
```

## 리터럴 타입

### 리터럴 타입, 문자열
```javascript
function printText(s: string, alignment: "left" | "right" | "center") {

}
printText("Hello world", "left"); // OK
printText("Hello world", "centre"); // ERR
```

### 리터럴 타입, 숫자
```javascript
function compare(a: string, b: string): -1 | 0 | 1 {

}
```
