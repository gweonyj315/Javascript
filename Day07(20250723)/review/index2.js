const starbucks = [
    {name:"아메리카노", price:4500, shots:2, ingredients:["water", "caffeine"]},
    {name:"라떼", price:5500, shots:2, ingredients:["water", "milk", "caffeine"]},
    {name:"돌체라떼", price:6500, shots:3, ingredients:["water", "milk", "caffeine", "condensed milk"]},
    {name:"바닐라 크림", price:5500, shots:2, ingredients:["milk", "caffeine", "vanilla"]},
    {name:"카페 모카", price:6000, shots:2, ingredients:["milk", "chocolate", "water", "caffeine"]}
];

// 01. 라떼 메뉴만 나타내기


// 02. 가격이 6,000원 이상 메뉴만 나타내기

// 03. 저녁 타임 이벤트로 각 가격을 20% 할인해서 메뉴 전체 나타내기
const fn3 = (obj)=>{
    obj.price = obj.price * 0.8
    return obj;
}
const result3 = starbucks.map(fn3);
window.console.log("🎈result3🎈")
window.console.log(result3);


// 04. 이름에 라떼가 있으면, 재고없음 이름 바꾸고 아니면 그대로 나타내기
const fn4 = (obj)=>{
    if(obj.name.includes("라떼")){
        obj.name = "재고없음"
    }
    return obj
}
const result4 = starbucks.map(fn4);
window.console.log("🎈result4🎈")
window.console.log(result4);

// 05. caffeine -> decaffeine (map을 두 번 사용)
const fn5 = (obj)=>{
    const caffeine_idx = obj.ingredients.findIndex(ingredient=>ingredient=="caffeine")
    obj.ingredients[caffeine_idx] = "decaffeine";
    return obj
}
const result5 = starbucks.map(fn5);
window.console.log("🎈result5🎈")
window.console.log(result5)

// test
const arr = []
arr.findIndex