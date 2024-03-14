const ranNum1 = Math.floor(Math.random() * 6) + 1;
const ranDiceImg = "dice" + ranNum1 + ".png"
const ranImgSrc = "images/" + ranDiceImg;
const img1 = document.querySelectorAll("img")[0]; // First image elements
img1.setAttribute("src", ranImgSrc);

const ranNum2 = Math.floor(Math.random() * 6) + 1;
const ranImgSrc2 = "image/dice" + ranNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", ranImgSrc2); // Second image element

let h1 = document.querySelector("h1");

if (ranNum1 > ranNum2) {
    h1.innerHTML = "Player 1 Wins!"
} else if (ranNum1 < ranNum2) {
    h1.innerHTML = "Player 2 Wins!"
} else {
    h1.innerHTML = "DRAW!"
}
