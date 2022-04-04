let newWindow = document.querySelector(".container");
const backUp = document.querySelector(".container").innerHTML;

function closeRequest(){
    newWindow.innerHTML = `<div class="background">
    <div class="requests">
        <div class="title">Confirme seu Pedido</div>
        <div class="request"><p>Frango</p><p>14,90</p></div>
        <div class="request"><p>Frango</p><p>14,90</p></div>
        <div class="request"><p>Frango</p><p>14,90</p></div>
        <div class="request"><p>TOTAL</p><p>46,90</p></div>
        <button class="endRequest">Tudo Certo, pode pedir!</button>
        <button onclick="closeWindow()" class="cancel">Cancelar</button>
    </div>
</div>
${newWindow.innerHTML}`;
}

function closeWindow(){
    newWindow.innerHTML = backUp;
}

let optionlunch = false;
let optionDrink = false;
let optionDessert = false;

function selectLunch(item){
    let lunchSelected = document.querySelector(".selectedLunch");
    if (lunchSelected !== null){
        lunchSelected.classList.remove("selectedLunch");
    }
    item.classList.add ("selectedLunch");
    optionlunch = true;
    if (optionlunch && optionDrink && optionDessert){
        document.querySelector(".end").classList.add("buttonColor")
        optionlunch = false;
        optionDrink = false;
        optionDessert =false;
    }
}

function selectDrink(item){
    let optionSelected = document.querySelector(".selectedDrink");
    if (optionSelected !== null){
        optionSelected.classList.remove("selectedDrink");
    }
    item.classList.add ("selectedDrink");
    optionDrink = true;
    if (optionlunch && optionDrink && optionDessert){
        document.querySelector(".end").classList.add("buttonColor")
        optionlunch = false;
        optionDrink = false;
        optionDessert =false;
    }
}

function selectDessert(item){
    let optionSelected = document.querySelector(".selectedDessert");
    if (optionSelected !== null){
        optionSelected.classList.remove("selectedDessert");
    }
    item.classList.add ("selectedDessert");
    optionDessert = true;
    if (optionlunch && optionDrink && optionDessert){
        document.querySelector(".end").classList.add("buttonColor")
        optionlunch = false;
        optionDrink = false;
        optionDessert =false;
    }
}