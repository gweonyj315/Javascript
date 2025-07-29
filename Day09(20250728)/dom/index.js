// document [html타입] - querySlector(All)(찾기), createElement(만들기)
// element [tag타입] - appendChild(자식태그로 넣기), style

// // 01. querySelector() / querySelectorAll(): 찾아주세요
// const a = document.body.querySelector(".hi");
// window.console.log(a);

// 02. createElemen / appendChild
// const button = document.createElement("button");
// button.innerHTML = "그러지마"
// document.body.appendChild(button);

// // q1. 콘솔에 나오도록 monday, feeling
// const monday = document.body.querySelector(".monday");
// const feeling = document.body.querySelector(".feeling");
// window.console.log(monday);
// window.console.log(feeling);
// // q2. monday 내용 바꾸기
// document.body.querySelector(".monday").innerHTML = "내일은 화요일"
// // q3. time 태그에 현재시간 나오도록
// document.body.querySelector(".time").innerHTML = new Date().toLocaleDateString();
// q4
// document.body.querySelector(".month").innerHTML = new Date().getMonth()+1;
// document.body.querySelector(".date").innerHTML = new Date().getDate();
// document.body.querySelector(".day").innerHTML = new Date().getDay();
// document.body.querySelector(".hour").innerHTML = new Date().getHours();
// document.body.querySelector(".minute").innerHTML = new Date().getMinutes();
// q5. button - 해피!, 글씨pink, 배경색green, 폰트30px
const button5 = document.createElement("button")
button5.innerHTML = "happy!"
button5.style.color = "pink"
button5.style.backgroundColor = "green"
button5.style.font = "30px"
button5.style.padding = "3px 5px 3px 5px"
document.body.appendChild(button5)