const button = document.querySelector(".change-color");
const bColor = document.querySelector(".color");
const bColor1 = document.querySelector("body");
button.addEventListener("click", () => {
  bColor.textContent = getRandomHexColor()
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(bColor.textContent )
 bColor1.style.backgroundColor = `${bColor.textContent}`;

});
