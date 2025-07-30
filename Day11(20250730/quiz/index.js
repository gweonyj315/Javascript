const data = [
    {
        size:"M(250~275mm)",
        name:"블랙 10팩",
        price:15900
    },
    {
        size:"M(250~275mm)",
        name:"스노우화이트5팩 + 블랙5팩",
        price:15900
    }
]

const goods = document.querySelector(".goods");
const makeGood = (x)=>`
    <div class="good">
        <div class="name">${x.size} * ${x.name}</div>
        <div class="info">
            <div class="count">
                <button class="minus">-</button>
                <div class="num">1</div>
                <button class="plus">+</button>
            </div>
            <div class="price">15900원</div>
        </div>
    </div>
`
data.forEach((x)=>{
    goods.insertAdjacentHTML("beforeend", makeGood(x))
})


const num = document.querySelector(".num")
const price = document.querySelector(".price")
const totalPrice = document.querySelector(".totalPrice")
button_minus = document.querySelector(".minus");
button_plus = document.querySelector(".plus");
button_minus.addEventListener("click", ()=>{
    if(+num.innerHTML>1){
        const nowNum = +num.innerHTML;
        num.innerHTML = nowNum - 1;  
    }
    price.innerHTML = 15900 * (+num.innerHTML) + "원"
    totalPrice.innerHTML = "원"
})
button_plus.addEventListener("click", ()=>{
    const nowNum = +num.innerHTML;
    num.innerHTML = nowNum + 1;   
    price.innerHTML = 15900 * (+num.innerHTML) + "원"
    totalPrice.innerHTML = "원"
})