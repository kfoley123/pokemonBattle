const fightButton = document.querySelector(".fight");
const pkmnButton = document.querySelector(".pkmn");
const itemButton = document.querySelector(".item");
const runButton = document.querySelector(".run");

runButton.addEventListener("click", runAway);

function runAway() {
    alert("You can't run from a trainer battle!");
}
