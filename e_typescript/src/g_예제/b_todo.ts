//! 타입스크립트 TODO 리스트 구현

/*
데이터 구조
  - 여러 개의 할 일을 저장할 수 있는 배열
  - 각 할 일은 객체

  EX) 상품들-상품 / 회원들-회원 / 할일들(TodoItem[])-할일(TodoItem)

  cf) 배열 타입 정의: 요소타입[]

요구사항 정리
  1. Todo(할 일, 객체) 항목의 인터페이스 정의(TodoItem)
    : id(고유값, number), task(할 일 내용, string), completed(완료 여부, boolean)

  2. 각 할 일들을 todos 배열로 관리

  3. 할 일 리스트를 관리하는 함수 구현
    - addTodo (생성)
    - completedTodo (수정)
    - deleteTodo (삭제)
*/

// 1. 할 일의 객체 인터페이스 명시
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}
