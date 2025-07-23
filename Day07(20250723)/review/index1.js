// 01. 숫자 배열 제곱 값 구하기
const func1 = (x)=>{
    return x**2;
}
const arr1 = [1, 2, 3, 4].map(func1);
window.console.log("🎈result1🎈")
window.console.log(arr1);

// 02. 이름 배열 대문자로 변환하기
const func2 = (str)=>{
    return str.toUpperCase();
}
const arr2 = ['Hong', 'kim', 'lee'].map(func2);
window.console.log("🎈result2🎈")
window.console.log(arr2);

// 03. 점수 배열에 60점 미만 기준으로 합격/불합격 여부 표시하기
const func3 = (score)=>{
    if(score<60) {return "불합격"}
    else {return "합격"}
}
const arr3 = [85, 42, 77].map(func3);
window.console.log("🎈result3🎈")
window.console.log(arr3);

// 04. 상품 할인 가격 20% 배열 만들기
const func4 = (price)=>{
    return price*0.8;
}
const arr4 = [10000, 20000, 15000].map(func4);
window.console.log("🎈result4🎈")
window.console.log(arr4);

// 05. 학생 객체 배열에서 이름만 추출하기
const func5 = (obj)=>{
    return obj.name;
}
const arr5 = [{name:'홍길동', age:16}, {name:'김철수', age:17}].map(func5);
window.console.log("🎈result5🎈")
window.console.log(arr5);

