const bus = [
  { name: "시내버스", price: 1200 },
  { name: "광역버스", price: 2000 },
  { name: "마을버스", price: 1000 },
];

// 입력
const type = +window.prompt("버스 노선의 종류(정수 1~3)") - 1;
const age = +window.prompt("승객의 나이?");
//
const user_idx = [];
if ((age <= 7 && age >= 0) || age >= 65) {
  window.console.log(`${bus[type].name} 요금: ${bus[type].price * 0}원`);
} else if (age <= 19) {
  window.console.log(`${bus[type].name} 요금: ${bus[type].price * 0.7}원`);
} else if (age <= 64) {
  window.console.log(`${bus[type].name} 요금: ${bus[type].price * 1}원`);
}
