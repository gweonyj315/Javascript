// Q01 숫자 +, -
// Q02
// 0미만으로 마이너스 안되도록 막아주고
// 10이상이면 num의 글씨 색상이 파란색으로 바뀌기
// 1~9이면 num의 글씨 색상이 검은색으로 바뀌기

const button_minus = document.querySelector(".minus")
const button_plus = document.querySelector(".plus")
const num = document.querySelector(".num")

button_minus.addEventListener("click", ()=>{
    if(+num.innerHTML>0){
        num.innerHTML = +num.innerHTML - 1;
    }

    if(+num.innerHTML>=10){
        num.style.color = "blue"
    }else if(+num.innerHTML<=9 && +num.innerHTML>=0){
        num.style.color = "black"
    }
})

button_plus.addEventListener("click", ()=>{
    num.innerHTML = +num.innerHTML + 1;

    if(+num.innerHTML>=10){
        num.style.color = "blue"
    }else if(+num.innerHTML<=9 && +num.innerHTML>=0){
        num.style.color = "black"
    }
})





