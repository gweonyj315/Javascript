// 신문법
const clothes = [
    {
        src:"clothes1.jpg",
        brand:"무신사 스탠다드",
        name:"플렉스 포스",
        price:"93,420원",
    },
    {
        src:"clothes1.jpg",
        brand:"나이키",
        name:"바지",
        price:"20,020원",
    },
    {
        src:"clothes1.jpg",
        brand:"아디다스",
        name:"신발",
        price:"93,420원",
    },
    {
        src:"clothes1.jpg",
        brand:"무신사 스탠다드",
        name:"플렉스 포스",
        price:"93,420원",
    },
    {
        src:"clothes1.jpg",
        brand:"무신사 스탠다드",
        name:"플렉스 포스",
        price:"93,420원",
    },
    {
        src:"clothes1.jpg",
        brand:"무신사 스탠다드",
        name:"플렉스 포스",
        price:"93,420원",
    },
]

const itemTag = (item)=>`
        <div class="item">
            <img src="${item.src}" alt="">
            <div class="info">
                <span class="brand">${item.brand}</span>
                <span class="name">${item.name}</span>
                <span class="price">${item.price}</span>
            </div>
        </div>
`;
const box = document.querySelector(".box");
clothes.forEach((x)=>{
    box.insertAdjacentHTML("beforeend", itemTag(x));
});
