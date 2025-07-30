// button.addEventListener("이벤트종류", 무엇을)
const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    alert("Hi")
})

// Q01. 추가버튼을 클릭하면 새롭게 div태그로 아메리카노라고 적힌 요소가 생성됨!
const body = document.querySelector("body")
const buttonAdd = document.querySelector(".add")
const makeDiv = `<div class="americano">americano</div>`
buttonAdd.addEventListener("click", ()=>{
    body.insertAdjacentHTML("beforeend", makeDiv)
})