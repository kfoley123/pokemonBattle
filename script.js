const menu = document.querySelector(".mainMenu");
const battleMenu = document.querySelector(".fightMenu");
const fightButton = document.querySelector(".fight");
const pkmnButton = document.querySelector(".pkmn");
const itemButton = document.querySelector(".item");
const runButton = document.querySelector(".run");

fightButton.addEventListener("click", attackMenu);
pkmnButton.addEventListener("click", changePokemon);
itemButton.addEventListener("click", useItem);
runButton.addEventListener("click", runAway);

function attackMenu() {
    //going to open battle move menu
    menu.classList.toggle("hidden");
    battleMenu.classList.toggle("hidden");
}

function changePokemon() {
    //going to open pokemon team menu
}

function useItem() {
    //going to open item menu
}

function runAway() {
    alert("You can't run from a trainer battle!");
}
