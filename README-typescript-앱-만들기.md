## 신규 프로젝트를 typescript 프로젝트로 만들기
```bash
npx create-react-app 프로젝트명 --template typescript

npx create-react-app 프로젝트명 ts-app-01 typescript
```

## 기존 react 프로젝트에 typescript 추가하기
```bash
## react 프로젝트 생성
npx create-react-app ts-app-02

## typescript 패키지 설치
cd ts-app-02
npm install typescript @types/node @types/react @types/react-dom @types/jest

## tsconfig.json 파일 생성
npx tsc --init
```
