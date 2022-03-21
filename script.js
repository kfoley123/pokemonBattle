const menu = document.querySelector(".mainMenu");
const battleMenu = document.querySelector(".fightMenu");
const fightButton = document.querySelector(".fight");
const pkmnButton = document.querySelector(".pkmn");
const partyList = document.querySelector(".partyList");
const itemButton = document.querySelector(".item");
const itemList = document.querySelector(".itemList");
const runButton = document.querySelector(".run");
const oppObj = document.querySelector(".foe");
const backButton = document.querySelector(".back");
const playerObj = document.querySelector(".team");
const textBox = document.querySelector(".textBox");

let playerHeathBar = playerObj.children[3];

let oppHealthBar = oppObj.children[2];

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

let opponentHP = 40;
let playerHP = 40;

oppHealthBar.innerHTML = opponentHP;
playerHeathBar.innerHTML = playerHP;

fightButton.addEventListener("click", attackMenu);
pkmnButton.addEventListener("click", changePokemon);
itemButton.addEventListener("click", useItem);
runButton.addEventListener("click", runAway);
backButton.addEventListener("click", returnToMain);

function returnToMain() {
    menu.classList.toggle("hidden");
    if (!battleMenu.classList.contains("hidden")) {
        battleMenu.innerHTML = "";
        battleMenu.classList.toggle("hidden");
    }
    if (!partyList.classList.contains("hidden")) {
        partyList.classList.toggle("hidden");
    }
    if (!itemList.classList.contains("hidden")) {
        itemList.classList.toggle("hidden");
    }
}

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

function doMove(moveEvent) {
    var clickedMoveName = moveEvent.target.innerHTML;
    textBox.innerHTML = `<p> Pokemon used ${clickedMoveName} </p>`;
    textBox.classList.toggle("hidden");
    console.log(textBox);
    moveSet.forEach((move) => {
        if (move.name === clickedMoveName) {
            var newHP = opponentHP - move.damage;
            if (newHP < 0) {
                newHP = 0;
            }
            opponentHP = newHP;
        }
        oppHealthBar.innerHTML = opponentHP;
    });
    if (opponentHP === 0) {
        alert("Opponents pokemon has fainted!");
    }
    disableMenu(true);
    doOppMove();
    returnToMain();
}

function doOppMove() {
    var opponentMove = moveSet[Math.floor(Math.random() * moveSet.length)];
    textBox.innerHTML = `<p> Opponent used ${opponentMove.name} </p>`;
    console.log(opponentMove);
    var tempHP = playerHP - opponentMove.damage;
    if (tempHP < 0) {
        tempHP = 0;
    }
    playerHP = tempHP;
    playerHeathBar.innerHTML = playerHP;
    if (playerHP === 0) {
        alert("Player's pokemon has fainted!");
    }
    disableMenu(false);
}

function disableMenu(yesNo) {
    for (var i = 0; i < menu.children.length; i++) {
        menu.children[i].disabled = yesNo;
    }
}
