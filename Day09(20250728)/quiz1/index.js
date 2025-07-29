// quiz1
// const tag = window.prompt("만들고 싶은 태그는?")
// const backgroundColor = window.prompt("배경색은?")
// const content = window.prompt("컨텐츠는?")

// const createE = document.createElement(tag);
// createE.style.backgroundColor = backgroundColor;
// createE.innerHTML = content;
// document.body.appendChild(createE);


// quiz2
const foodsList = prompt("favorite foods:").split(" ");
const colorList = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"]


foodsList.map((x, i)=>{
    const btn = document.createElement("button");
    btn.innerHTML = x;
    btn.style.color = colorList[i%7];
    document.body.appendChild(btn);

})
