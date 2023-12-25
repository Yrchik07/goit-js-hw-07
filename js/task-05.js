const button = document.querySelector(".change-color");
const bColor = document.querySelector(".color");
const bColor1 = document.querySelector("body");
// console.log(bColor)


// const textInput = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");
// console.log(textInput)
// console.log(output)
// textInput.addEventListener("input", (event) => {
//     if(event.currentTarget.value.trim()){
//   output.textContent = event.currentTarget.value.trim();}
// });





button.addEventListener("click", () => {
  bColor.textContent = getRandomHexColor()
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

});
// bColor1.style.backgroundColor = "#800cad";

// bColor1.style.backgroundColor = "getRandomHexColor()";

console.log(bColor.textContent)