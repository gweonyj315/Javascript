const num = "123456789" // -> "123456***"
const result = num.split("").map((x, i) => i > 5 ? "*" : x).join("");
window.console.log(result);