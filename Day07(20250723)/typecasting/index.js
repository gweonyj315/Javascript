// 01. 문자에서 배열로 바꾸기
// -1) split 함수 사용하기 "apple watch".split("")
// -2) 스프레드(...) 연산자 [..."apple watch"]

// 02. 배열에서 문자로 바꾸기
// -1) join 함수 사용하기 

// Q1. 유저에게 영단어를 입력 받고 -> a, e, i는 대문자로 바꾸고 아니면 그대로 해서 콘솔로 나타내기
const input = window.prompt("영단어를 입력하세요!");
const result = input.split("").map((ch)=>((ch=='a'||ch=='e'||ch=='i')?ch.toUpperCase():ch)).join("");
window.console.log(result);
