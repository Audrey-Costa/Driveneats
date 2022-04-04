let newWindow = document.querySelector(".container");
const initialState = document.querySelector(".container").innerHTML;

let lunch;
let drink;
let dessert;
let priceLunch;
let priceDrink;
let priceDessert;

let optionlunch;
let optionDrink;
let optionDessert;

function closeWindow(){
    newWindow.innerHTML = initialState;
    optionlunch = false;
    optionDrink = false;
    optionDessert =false;
}

function selectLunch(item){
    let lunchSelected = document.querySelector(".selectedLunch");
    if (lunchSelected !== null){
        lunchSelected.classList.remove("selectedLunch");
        lunchSelected.querySelector(".icon").classList.remove("show")
    }

    item.classList.add ("selectedLunch");
    optionlunch = true;
    item.querySelector(".icon").classList.add("show");
    lunch = item.querySelector("p").innerText;
    priceLunch = item.querySelector(".price > p").innerText;

    if (optionlunch && optionDrink && optionDessert){
        document.querySelector(".end").classList.add("buttonColor")

    }
}

function selectDrink(item){
    let drinkSelected = document.querySelector(".selectedDrink");
    if (drinkSelected !== null){
        drinkSelected.classList.remove("selectedDrink");
        drinkSelected.querySelector(".icon").classList.remove("show")
    }

    item.classList.add ("selectedDrink");
    optionDrink = true;
    item.querySelector(".icon").classList.add("show");
    drink = item.querySelector("p").innerText;
    priceDrink = item.querySelector(".price > p").innerText;

    if (optionlunch && optionDrink && optionDessert){
        document.querySelector(".end").classList.add("buttonColor")
    }
}

function selectDessert(item){
    let dessertSelected = document.querySelector(".selectedDessert");
    if (dessertSelected !== null){
        dessertSelected.classList.remove("selectedDessert");
        dessertSelected.querySelector(".icon").classList.remove("show")
    }

    item.classList.add ("selectedDessert");
    optionDessert = true;
    item.querySelector(".icon").classList.add("show");
    dessert = item.querySelector("p").innerText;
    priceDessert = item.querySelector(".price > p").innerText;

    if (optionlunch && optionDrink && optionDessert){
        document.querySelector(".end").classList.add("buttonColor")
    }
}

function closeRequest(){
    if(optionlunch && optionDrink && optionDessert){
        let valorLunch = Number(priceLunch.split(",")[0].split(" ")[1] + "." + priceLunch.split(",")[1]).toFixed(2);
        let valorDrink = Number(priceDrink.split(",")[0].split(" ")[1] + "." + priceDrink.split(",")[1]).toFixed(2);
        let valorDessert = Number(priceDessert.split(",")[0].split(" ")[1] + "." + priceDessert.split(",")[1]).toFixed(2);
        let total = (Number(valorLunch) + Number(valorDrink) + Number(valorDessert)).toFixed(2);
        total = total.split(".");

        newWindow.innerHTML = `<div class="background">
    <div class="requests">
        <div class="title">Confirme seu Pedido</div>
        <div class="request"><div class="optionName"><p>${lunch}</p></div><div class="optionPrice"><p>${priceLunch}</p></div></div>
        <div class="request"><div class="optionName"><p>${drink}</p></div><div class="optionPrice"><p>${priceDrink}</p></div></div>
        <div class="request"><div class="optionName"><p>${dessert}</p></div><div class="optionPrice"><p>${priceDessert}</p></div></div>
        <div class="request"><div class="total"><p>TOTAL</p></div><div class="optionPrice total"><p>R$ ${total}</p></div></div>
        <button class="endRequest">Tudo Certo, pode pedir!</button>
        <button onclick="closeWindow()" class="cancel">Cancelar</button>
    </div>
</div>
${newWindow.innerHTML}`;
    }
}
