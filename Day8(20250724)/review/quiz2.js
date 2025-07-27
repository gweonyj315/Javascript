const nintendo = [
    { title: "마리오 카트", genre: ["레이싱", "아케이드"], price: 59800, multiplayter: true },
    { title: "포켓몬스터", genre: ["RPG", "어드벤처"], price: 64800, multiplayter: false },
    { title: "동물의 숲", genre: ["RPG", "힐링"], price: 64800, multiplayter: true },
    { title: "별의 커비", genre: ["액션", "어드벤처"], price: 49800, multiplayter: false },
    { title: "슈퍼마리오 오디세이", genre: ["액션", "어드벤처", "아케이드"], price: 79800, multiplayter: false }
];

// 01. 가격이 60000원 이하이고, 멀티플레이가 되는 게임 리스트
const quiz1 = nintendo.filter((x) => x.price <= 60000 && x.multiplayter == true);
window.console.log(quiz1);

// 02. 장르가 어드벤처이고, 가격이 60000원 이상인 게임 리스트
const quiz2 = nintendo.filter((x) => x.genre.some((v) => v == "어드벤처") && x.price >= 60000);
window.console.log(quiz2);

// 03. 멀티 플레이어가 안되고, 장르가 어드벤처인 게임 리스트
const quiz3 = nintendo.filter((x) => x.multiplayter == false && x.genre.some((v) => v == "어드벤처"));
window.console.log(quiz3);
