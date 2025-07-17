const subway = [
  { name: "일반 노선", price: 1250 },
  { name: "급행 노선", price: 2000 },
  { name: "관광 노선", price: 3000 },
];

// input
const type = +window.prompt("지하철 노선 종류(정수 1~3") - 1;
const age = +window.prompt("승객의 나이");
const gap = +window.prompt("탑승 구간");
//
if ((age >= 0 && age <= 7) || age >= 65) {
  // 어린이 & 노인
  window.console.log(`${subway[type].name}의 ${gap}구간 요금: 0원`);
} else if (age >= 19 && age <= 64) {
  if (gap <= 10) {
    // 성인
    // 10구간 이하
    window.console.log(
      `${subway[type].name}의 ${gap}구간 요금: ${subway[type].price}원`
    );
  } else {
    // 11구간 이상
    window.console.log(
      `${subway[type].name}의 ${gap}구간 요금: ${
        subway[type].price + (gap - 10) * 100
      }원`
    );
  }
} else {
  // 청소년
  if (gap <= 10) {
    // 10구간 이하
    window.console.log(
      `${subway[type].name}의 ${gap}구간 요금: ${subway[type].price * 0.6}원`
    );
  } else {
    // 11구간 이상
    window.console.log(
      `${subway[type].name}의 ${gap}구간 요금: ${
        (subway[type].price + (gap - 10) * 100) * 0.6
      }원`
    );
  }
}
