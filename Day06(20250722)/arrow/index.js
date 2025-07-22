// // 일반 함수[구문법]
// function plus100(x){
//     return x+100;
// }

// // 화살표 함수[신문법]
// const plus100 = (x)=>{
//     return x+100;
// }

//---------------- QUIZ --------------------//
// 1. x를 주면 두 배 돌려주는 화살표 함수
const func1 = (x)=>{
    return x*2;
}

// 2. x를 주면 -500해서 돌려주는 화살표 함수
const func2 = (x)=>{
    return x-500;
}

// 3. x, y를 주면 더 큰 숫자를 돌려주는 화살표 함수
const func3 = (x, y)=>{
    if(x>=y){return x}
    else{return y}
}

// 4. str을 주면 길이를 돌려주는 화살표 함수
const func4 = (str)=>{
    return str.length
}

// 5. str을 주면 문자의 길이가 10글자 보다 크면 길이가 길어요!
//    아니면 길이가 적당해요를 돌려주는 화살표 함수
const func5 = (str)=>{
    if(str.length>10){return "길이가 길어요!"}
    else{return "길이가 적당해요!"}
}

// 6. 어떤 str을 주면, str을 하다니 럭키비키잖아
const func6 = (str)=>{
    return str + "을(를) 하다니 럭키비키잖아"
}

// 7. x, y를 주면, x의 y제곱을 돌려주는 화살표 함수
const func7 = (x, y)=>{
    return x**y;
}


// 8. x, y를 주었을 때, 두 수의 차를 돌려주는 화살표 함수
const func8 = (x, y)=>{
    return x-y;
}

// 9. str를 주었을 때, a or b 가 포함하면, a, b 포함! 아니면 a, b 미포함!
const func9 = (str, a, b)=>{
    if(str.includes(a) || str.includes(b)){
        return `${a} or ${b} 포함`
    }
    else{
        return `${a} or ${b} 미포함`
    }
}

// 10. x를 주었을 때, x의 배수를 리스트로 돌려주는 함수 (9배수까지)
const func10 = (x)=>{
    return [x*1, x*2, x*3, x*4, x*5, x*6, x*7, x*8, x*9]
}

// 11. str, x를 주었을 때, str의 0번째 부터 x번째까지의 문자열을 돌려주는 함수
const func11 = (str,x)=>{
    return str.slice(0, x+1);
}

//---------------- TEST --------------------//
// 1
// const input1 = window.prompt("x를 입력하세요!")
// window.alert(func1(input1));
//2
// const input2 = window.prompt("x를 입력하세요!")
// window.alert(func2(input2))
// 6
const input6 = window.prompt("str 입력")
window.alert(func6(input6));
