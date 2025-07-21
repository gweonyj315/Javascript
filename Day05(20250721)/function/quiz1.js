// 1. 어떠한 x를 넣으면 제곱을 돌려주는 함수 만든 후 콘솔로 결과
function sqrt(x){
    return x*x;
}
const result1 = sqrt(3);
window.console.log("result1: ", result1);

// 2. 어떠한 food를 넣으면 'food는 맛있다' 함수 만든 후 콘솔로 결과
function foodGood(food){
    return food + "는 맛있다";
}
const result2 = foodGood("카레");
window.console.log("result2: ", result2);

// 3. 어떠한 x를 넣으면 홀수 또는 짝수를 돌려주는 함수를 만든 후 콘솔로 결과
function even_odd(x){
    if(x%2==0){
        return "짝수";
    }else{
        return "홀수";
    }
}
const result3 = even_odd(3);
window.console.log("result3: ", result3);

// 4. 어떠한 x를 넣으면 배열로 [x*1, x*2, x*3]을 돌려주는 함수 만든 후 콘솔로 결과
function multiply(x){
    const array = [x*1, x*2, x*3];
    return array;
}
const result4 = multiply(4);
window.console.log("result4: ", result4);