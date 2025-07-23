// const fn1 = (x)=>x*2;
// const fn2 = (x)=>x**10;
// const fn3 = (x)=>(x>5?1:2);
// const fn4 = (x)=>(x%2?"홀수":"짝수")
// const arr1 = [1, 2, 3, 4, 5].map((x)=>x*2);

// // 02. filter 함수
// const fn5 = (x)=>{
//     return true;
// }
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x)=>x<=5);

// // filter 문제
// // Q1. 4의 배수만 살리
// const q1 = [2, 4, 6, 8, 10];
// const result_q1 = q1.filter((x)=>x%4==0);
// window.console.log("🎈result1🎈")
// window.console.log(result_q1);

// // Q2. 알파벳 a가 포함된 과일만 살리기
// const q2 = ["apple", "mango", "grape", "kiwi"];
// const result_q2 = q2.filter((x)=>q2.includes("a"))
// window.console.log("🎈result2🎈")
// window.console.log(result_q2);

// // Q3. 장르가 로맨스 인건만 살리기!
// const q3 = [
//     {name:"더글로리", genre:["범죄", "사회고발", "피카레스크"]},
//     {name:"오징어게임", genre:["범죄", "스릴러", "블랙 코미디"]},
//     {name:"폭싹 속았수다", genre:["로맨스", "드라마", "휴먼"]}
// ];
// const result_q3 = q3.filter((q3.genre.includes("로맨스")))


// 03. some
// 요소 중에 해당 조건인 것이 하나 있니?
const a = [1, 2, 3, 4, 5].some((x)=>x==5); // true
const b = [1, 2, 3, 4, 5].every((x)=>x==5); // false