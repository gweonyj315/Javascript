const cafeMenu = [
    { name: "아메리카노", price: 4000, isIce: false, calories: 10, ingredients: ["에스프레소", "물"] },
    { name: "아이스라떼", price: 4800, isIce: true, calories: 120, ingredients: ["에스프레소", "우유", "얼음"] },
    { name: "자몽에이드", price: 5200, isIce: true, calories: 110, ingredients: ["자몽", "탄산수", "얼음", "시럽"] },
    { name: "핫초코", price: 4500, isIce: false, calories: 230, ingredients: ["코코아", "우유", "설탕"] },
    { name: "딸기라떼", price: 5300, isIce: true, calories: 210, ingredients: ["딸기", "우유", "얼음", "설탕"] }
];

// 01. 우유가 들어간 메뉴의 이름만 배열로 추출하기
const fn1 = cafeMenu.filter((x) => x.ingredients.some((v) => v == "우유"))
window.console.log(fn1)

// 02. 에스프레소가 들어가지 않는 차가운(ice)메뉴의 이름 배열 만들기
const fn2 = cafeMenu.filter((x) => x.isIce == true)
window.console.log(fn2);

// 03. 칼로리가 100미만이면서 우유가 들어가지 않은 메뉴의 이름만 배열로 만들기
const fn3 = cafeMenu.filter((x) => x.calories < 100 && x.ingredients.every((v) => v != "우유"))
window.console.log(fn3);

// 04. '설탕' 성분이 들어간 메뉴만 이름과 가격 객체 배열로 만들기
const fn4 = cafeMenu.filter((x) => x.ingredients.some((v) => v == "설탕")).map((x) => { return { name: x.name, price: x.price } })
window.console.log(fn4);