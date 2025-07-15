const a = 1; // 숫자 - Number
const b = "1"; // 문자 - String

const a1 = Number("100") + 20; // 120
const a2 = Number("1004") + Number(10); // 1014

const b1 = String(100) + "10"; // 10010
const b2 = String(13) + "14"; // 1314

window.console.log(`a1결과: ${a1}`);
window.console.log(`a2결과: ${a2}`);
window.console.log(`b1결과: ${b1}`);
window.console.log(`b2결과: ${b2}`);
