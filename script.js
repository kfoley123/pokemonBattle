const menu = document.querySelector(".mainMenu");
const battleMenu = document.querySelector(".fightMenu");
const fightButton = document.querySelector(".fight");
const pkmnButton = document.querySelector(".pkmn");
const partyList = document.querySelector(".partyList");
const itemButton = document.querySelector(".item");
const itemList = document.querySelector(".itemList");
const runButton = document.querySelector(".run");

const moveSet = [
    {
        name: "tackle",
        damage: 10,
    },
    {
        name: "growl",
        damage: 0,
    },
    {
        name: "scratch",
        damage: 12,
    },
    {
        name: "bite",
        damage: 15,
    },
];

fightButton.addEventListener("click", attackMenu);
pkmnButton.addEventListener("click", changePokemon);
itemButton.addEventListener("click", useItem);
runButton.addEventListener("click", runAway);

function attackMenu() {
    moveSet.forEach((move) => {
        battleMenu.innerHTML += `<button class="attack">${move.name}</button>`;
    });
    const moves = document.querySelectorAll(".attack");
    moves.forEach((move) => {
        move.addEventListener("click", doMove);
    });
    menu.classList.toggle("hidden");
    battleMenu.classList.toggle("hidden");
}

function changePokemon() {
    menu.classList.toggle("hidden");
    partyList.classList.toggle("hidden");
}

function useItem() {
    menu.classList.toggle("hidden");
    itemList.classList.toggle("hidden");
}

function runAway() {
    alert("You can't run from a trainer battle!");
}

function doMove() {
    console.log("it works");
}
