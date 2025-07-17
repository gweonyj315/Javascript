const menu = [
  { name: "페페로니 피자", price: 15000 },
  { name: "치즈 피자", price: 13000 },
  { name: "불고기 피자", price: 16000 },
];

const pizza = +window.prompt("피자 종류(1~3)") - 1;
const amount = +window.prompt("구매 갯수");
const money = +window.prompt("투입 금액");
const back_money = money - menu[pizza].price * amount;

if (money > back_money) {
  window.console.log(`${menu[pizza].name} ${amount}개, 잔돈 ${back_money}`);
} else {
  window.console.log("잔액이 부족합니다.");
}
