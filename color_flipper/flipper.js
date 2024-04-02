/* First take all the neccessary elements to access in DOM
*/

let hexColorTxt = document.getElementById('color');
let btn = document.getElementById('btn');
let colorDiv = document.getElementById('background');
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']; // 0 - F, base 16

btn.addEventListener('click',function(){
    let hexCode = '#';
    for(let i = 1; i<= 6; i++){
        hexCode += randHexValue();
        // console.log(hexCode);
    }
    // console.log(hexCode);
    colorDiv.style.backgroundColor = hexCode; // apply bg color at every single click
    hexColorTxt.innerHTML = hexCode; // display hexcolor value at every single click

})

// console.log(randHexValue());
function randHexValue(){
    let randomIndex = Math.floor(Math.random()*16);
    // console.log(hex[randomIndex]);
    return hex[randomIndex];
}