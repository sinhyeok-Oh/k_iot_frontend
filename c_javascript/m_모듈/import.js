// : 수출하다

// 1) export된 특정 멤버 가져오기
import { PI as PIE, add as sum } from './export.js';

// : 사용하지 않는 import 기능은 연하게 표시
console.log(PIE);
console.log(sum(3, 5));

// +) as 없이 export에 정의된 이름만 사용
import { PI, add } from './export.js';
console.log(PI);
console.log(add)

// 2) export default로 내보낸 항목 가져오기
import a from './export.js';
import b from './export.js';
import cccccc from './export.js';
// : 중괄호가 없는 import 
// >> 모조건! 기본 내보내기
console.log(a(3, 5));
console.log(b(3, 6));
console.log(cccccc(3, 7));

// 3) 모든 멤버를 하나의 객체로 가져오기
// : import * as 별칭 from '파일명.확장자';
// > 사용 시 별칭.변수명 OR 별칭.함수명();
import * as exportDate from './export.js';
console.log(exportDate.name);
// > 전체 내보내기는 내부에서 내보낸 기능만 담김
//    : export되지 않는 내부 멤버는 접근 X
console.log(exportDate.add(5, 8));