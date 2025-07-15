// 산술 연산자
// +, -, *, /, %, **
const a1 = 1 + 3; //4
const a2 = 2 - 3; //-1
const a3 = 2 * 4; //8
const a4 = 3 / 3; //1
const a5 = 2 % 3; //2
const a6 = 2 ** 4; //16

// 대입 연산자
// =
const b = "떡볶이";

// 비교 연산자 [boolean타입으로 변환]
// >, <
const c1 = 5 > 3; //true
const c2 = 5 < 3; //false
const c3 = 5 >= 3; //true
const c4 = 5 <= 3; //false
const c5 = 10 == 11; //false
const c6 = 10 != 11; //true

// 논리 연산자
// &&(and), ||(or), !(not)
// &&(and): 모두 true여야 true
// ||(or): 하나라도 true이면 true
const d1 = 5 > 3 && 10 > 9; //true
const d2 = 1 == 2 || 2 == 4 || 3 == 3; //true
const d3 = !true; //false
//드모르간 법칙 적용 사례
const d4 = !(5 <= 3) || !(3 > 10);
const d5 = 5 > 3 && 3 < 10;

// 삼항 연산[조건 ? 값1 : 값2]
const e1 = true ? "떡볶이" : "순대"; //떡볶이
const e2 = false ? "아아" : "라떼"; //라떼
const e3 = 5 > 3 ? "집가고싶음" : "수업함"; //집가고싶음
const e4 = 10 < 9 ? "고기" : "회"; //회
