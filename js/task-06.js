const controls = document.querySelector("#controls");
const input = document.querySelector("#controls input");
let output = 1;
console.log(output);

input.addEventListener("input", (event) => output += event);
console.log(event)
// const create = controls.childNodes;
// console.log(create);

const create = document.querySelector("#controls button");
// console.log(create.textContent);
const destroy = document.querySelector("#controls button");
// console.log(create.textContent);

// const destroy = document.querySelector("#boxes");
const box = document.querySelector("#boxes");
const element1 = document.createElement("div")



element1.style.margin = "10px";
element1.style.backgroundColor = "#d23bd5";
element1.style.width = "30px";
element1.style.height = "30px";

const element2 = document.createElement("div")
element2.style.margin = "10px";
element2.style.backgroundColor = "#d23bd5";
element2.style.width = "30px";
element2.style.height = "30px";

const element3 = document.createElement("div")
element3.style.margin = "10px";
element3.style.backgroundColor = "#d23bd5";
element3.style.width = "30px";
element3.style.height = "30px";

const element4 = document.createElement("div")
element4.style.margin = "10px";
element4.style.backgroundColor = "#d23bd5";
element4.style.width = "30px";
element4.style.height = "30px";
// element.classList.add("box")
box.prepend(element1, element2, element3, element4);




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
