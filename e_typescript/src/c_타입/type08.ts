// ! === 타입 단언 (Type Assertion) ===
// : "개발자"가 TS 컴파일러(tsc) 보다 데이터 타입의 주도구너을 가지는 방법
// - 컴파일러에게 '이 데이터의 타입을 내가! 지정한 타입으로 간주해라!' 라는 지시

// ? 타입 단언 방법
// ? as 키워드 사용
// - 데이터 as 데이터 타입

let someValue: any = 'thie is a string';

// someValue = true; // 어떤 값이든 할당 가능하지만! 개발자가 문자열로 단언하고 싶을경우 

// let length = someValue.length;
// console.log(length); // undefined

let length: number = (someValue as string).length;
console.log(length); //16

// ? 타입 단언 사용 예시 
// : 웹 개밸에서 DOM 요소를 조작할 때, 특정 DOM 요소를 구체적인 HTMLElement 타입으로 던던!
// - TS가 자동으로 해당 DOM 요소의 정확한 타입을 추론할 수 X

// 1) HTMLElement 타입 단언
// HTMLElment: 모든 HTML 요소 타입의 최상위 타입
// - getElementById(), querySelector() 등으로 HTML 요소를 가져올 때 
//    리턴받는 DOM 객체의 타입은 HTMLElement 타입
// +) 해당하는 석택자의 요소가 없을 경우 null 반환

// cf)HTMLElement 타입은 각 요소들이 가진 고유한 속성에 접근할 수 없음
//    >> 각 DOM 객체가 가지는 고유한 속성에 접근하기 위해서는 반드시!! 타입 선언이 필요함
//    EX) HTML ButtonElement로 단언 시, disalbed 속성에 접근 가능

// ? 자주 쓰는 DOM 타입 선언
// - button: HTMLButtonElement
// - inpu: HTMLInputElement
// - form: HTMLFormElement
// - div: HTMLDivElement
// - img: HTMLImageElement

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('myButton');

  // ? bool 속성
  // HTML) 키워드만으로 명시
  //    <button disabled>버튼</button>
  // DOM) DOM 객체명.bool속성 = true;
  //    : boolean 값으러 설정 (기본값 false)

  if (button) {
    // 찾는 조건이 HTML 요소가 있는 경우
    (button as HTMLButtonElement).disabled = true;
  }
  // TS 컴파일러는 실시간 코드 변환을 하지 X
  // : 코드 수정 시 재컴파일 실행 필요
});

// 2) JSON 문자열
// - 객체(parse) <> JSON(stringfy)
// : JSON 문자열을 분석하여 분석(parse)하여 반환되는 데이터는 
//    any타입으로 간주

const jsonString = '{"name": "lsa", "age": 29}';

const userData1 = JSON.parse(jsonString);
// const userDatal: any
console.log(typeof userData1); // object 객체 타입

type UserType = {
  name: string;
  age: number;
}

const userDate2 = JSON.parse(jsonString) as UserType;
// const userData2: UserType
console.log(typeof userDate2); // object 객체 타입