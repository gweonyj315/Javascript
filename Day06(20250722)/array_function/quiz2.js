// 유저에게 프롬프트로 영어 문장을 입력 받고
// 띄어쓰기 별로 영어의 문장의 길이를 배열로 나타내기
const func = (x)=>{
    return x.length
}
const input = window.prompt("문장을 입력하세요!").split(" ").map(func);
window.console.log(input);
