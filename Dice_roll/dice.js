




function rollDice(){
const numOfDice = document.getElementById("numOfDice").value;
const diceResult = document.getElementById("diceResult");
const diceImg = document.getElementById("diceImg");
const values = [];
const images = [];

for(let i = 0; i < numOfDice; i++){
const value = Math.floor(Math.random() * 6) + 1;
values.push(value);
images.push(`<img src="/Dice_roll/img/${value}.svg" alt="Dice ${value}">`)
}
console.log(values);
diceResult.textContent = `dice: ${values.join(" | ")}`;
diceImg.innerHTML = images.join('');

}

