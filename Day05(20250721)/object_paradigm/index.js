const car = {
    name: "페라리",
    price: 100000000,
    color: "빨간색",
    changeColor: function(x){
        this.color = x;
    },
    priceUp: function(plusMoney){
        this.price += plusMoney;
    },
    changeName: function(name){
        this.name = name
    }
}

car.changeColor("검은색");
car.priceUp(30000);
car.changeName("포르쉐")

window.console.log(car);
