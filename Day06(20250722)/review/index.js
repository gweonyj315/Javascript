// Quiz1
// function function1(ch){
//     if(ch.toUpperCase()==ch){
//         window.alert(`${ch}은(는) 대문자입니다.`)
//     }
//     else{
//         window.alert(`${ch}은(는) 소문자입니다.`)
//     }
//     return 0;
// }
// const input1 = window.prompt("알파벳 1개를 입력하세요!")
// function1(input1)


// Quiz2
// function function2(str, ch){
//     if(str.includes(ch)){
//         window.alert(`${str}에는 ${ch}가 포함되어 있습니다.`)
//     }
//     else{
//         window.alert(`${str}에는 ${ch}가 포함되어 있지 않습니다.`)
//     }
//     return 0
// }
// const input_str = window.prompt("문자열을 입력하세요!")
// const input_ch = window.prompt("문자 1개를 인자로 받으세요!")
// function2(input_str, input_ch);


// Quiz3
function function3(email){
    if(email.includes('@')){
        window.alert(`<${email}>은(는) 올바른 이메일 형식입니다.`)
    }
    else{
        window.alert(`<${email}>은(는) 올바르지 않은 형식입니다.`)
    }
    return 0;
}
const email = window.prompt("이메일을 입력하세요!")
function3(email);
