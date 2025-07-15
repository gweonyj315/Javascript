// 1
// const r = window.prompt("한 변의 길이?");
// const area1 = Number(r) * Number(r);
// window.alert(`한 변의 길이 ${r}인 정사각형의 넓이: ${area1}`);

// 2
// const a = window.prompt("밑변의 길이?");
// const b = window.prompt("높이의 길이?");
// const area2 = (Number(a) * Number(b)) / 2;
// window.alert(`밑변 ${a}과 높이 ${b}인 정사각형의 넓이: ${area2}`);

// // 3
// const money_korea = window.prompt("원화?");
// const money_japan = Number(money_korea / 9.33);
// window.alert(`${money_korea}원은 ${money_japan}엔 입니다!`);

// // 4
const height = window.prompt("키[cm]?");
const height2meter = Number(height) / 100;
const weight = window.prompt("몸무게[kg]?");
const bmi = Number(weight) / (Number(height2meter) * Number(height2meter));
window.alert(`키: ${height} | 몸무게: ${weight} | BMI: ${bmi.toFixed(2)}`);

// // 5
// const minute = window.prompt("분?");
// const second = Number(minute) * 60;
// window.alert(`분: ${minute} -> 초: ${second}`);
