- 객체의 구조를 정의할 때는 interface를 사용
- 다양한 타입 정의가 필요할 때는 type alias를 사용
- 간단한 타입 정의나 일회성 타입 사용에는 object type을 사용

## interface
```typescript
// interface 는 객체의 구조를 정의
interface User {
  id: number;
  name: string;
  email?: string; // 선택적 속성
}

// interface 확장 (extends 사용)
interface Admin extends User {
  role: string;
}

// API 응답 타입이나 클래스 정의에 사용
interface ApiResponse {
  data: User[];
  status: number;
}
```


## type alias
```typescript
// type alias 정의
type User = {
  id: number;
  name: string;
};

// type alias 확장 (& 사용)
type Admin = User & {
  role: string;
};

// 유니온 타입 사용
type Status = "success" | "error";
type HorizontalAlign = "left" | "center" | "right";
type VerticalAlign = "top" | "middle" | "bottom";
```

## Object Type
- interface 나 type alias 를 사용하지 않고, 객체 리터럴로 타입을 정의하는 방식
```typescript
// 객체 리터럴로 타입을 정의
const user: { id: number, name: string } = {
  id: 1,
  name: 'james',
};
```
