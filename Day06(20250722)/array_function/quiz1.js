// 1. [3, 6, 9, 12, 15] 배열을 각각 요소를 두배하고 더하기 10해서 콘솔로 나타내기
const func1 = (x)=>{
    return x*2+10;
}
const arr1 = [3, 6, 9, 12, 15];
const new_arr1 = arr1.map(func1);
window.console.log("🎈QUIZ1결과🎈")
window.console.log(new_arr1)


// 2. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 배열을 각각 요소에서
// 홀수면 두배, 짝수면 세배 해서 결과를 콘솔로 나타내기
const func2 = (x)=>{
    if(x%2==1){
        return x*2;
    }
    else{
        return x*3;
    }
}
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const new_arr2 = arr2.map(func2);
window.console.log("🎈QUIZ2결과🎈")
window.console.log(new_arr2);

// 3. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 배열을 각각 요소에서
// 5보다 작으면 1로 크면 2로해서 결과를 콘솔로 나타내기
const func3 = (x)=>{
    if(x<5){
        return 1
    }
    else{
        return 2
    }
}
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const new_arr3 = arr3.map(func3);
window.console.log("🎈QUIZ3결과🎈")
window.console.log(new_arr3);


// 4. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 배열을 각각 요소에서
// 3의 배수면 "💛"로 아니면 "😋"로해서 결과를 콘솔로 나타내기
const func4 = (x)=>{
    if(x%3==0){
        return "💛"
    }
    else{
        return "😋"
    }
}
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const new_arr4 = arr4.map(func4);
window.console.log("🎈QUIZ4결과🎈")
window.console.log(new_arr4);


// 5. ["apple", "mango", "juice", "kiwi", "strawberry"]
// 요소를 문자의 길이로 바꿔서 콘솔로 나타내기
const func5 = (str)=>{
    return str.length
}
const arr5 = ["apple", "mango", "juice", "kiwi", "strawberry"]
const new_arr5 = arr5.map(func5);
window.console.log("🎈QUIZ5결과🎈")
window.console.log(new_arr5);