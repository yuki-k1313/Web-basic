/*
    제너릭 : 
    - 선언 시점이 아니라 컴파일 시점에 사용할 타입을 결정하는 방법론
    - 타입을 명시하지 않고 여러 타입을 사용할 수 있도록 하여 코드의 안전성과, 재사용성을 높일 수 있음
*/

interface Human1 {
    name: string;
    age: number;
}

interface Human2 {
    name: string;
    age: '어린이' | '청소년' | '청년' | '장년' | '노년';
}

interface Human3 {
    name: string;
    age: any;
}

interface Human<T> {
    name: string;
    age: T
}

const human: Human<number> = {
    name: '홍길동',
    age: 20
};

console.log('==================================================');