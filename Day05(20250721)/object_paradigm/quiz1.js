// 베스킨라빈스 오브젝트를 만들고,
// 아이스크림 3개 종류를 넣고,
// 매출은 0부터 시작하고
// 판매가 되면 그 아이스크림 가격에 따른 매출이 오르도록 하는 오브젝트 타입 만들기

// my code
const icecreams = [
    {   name: "누가바",
        price: 1000,
        sale: function(total_money, num){
            return total_money + this.price * num;
        }
    },
    {   name: "쌍쌍바",
        price: 800,
        sale: function(total_money, num){
            return total_money + this.price * num;
        }
    },
    {   name: "월드콘",
        price: 1200,
        sale: function(total_money, num){
            return total_money + this.price * num;
        }
    }
]

const total_money = 0;
icecreams[0].sale(3);
icecreams[1].sale(2);


// teacher code
const baskin = {
    icecreams: [
        {name: "딸기", price: 1500},
        {name: "초코", price: 2000},
        {name: "메론", price: 3000}
    ],
    sale_money: 0,
    sale: function(x, y){ // x는 종류, y는 갯수
        this.sale_money += this.icecreams[x].price * y;
    }
}