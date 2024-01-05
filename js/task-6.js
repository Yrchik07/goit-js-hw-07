const container = document.querySelector('#controls');
const input = container.querySelector('input');
const create = container.querySelector('button');
const destroy = container.lastElementChild;
const boxContainer = document.querySelector('#boxes');

console.log(container);
// console.log(input);
// console.log(create);
console.log(destroy);
// console.log(box);
input.addEventListener('blur', onInputBlur);
create.addEventListener('click', onClickBtn);
destroy.addEventListener('click', destroyBoxes);
function onClickBtn(){
  if(amount >= 1 & amount <= 100){
    // console.log(amount);
    createBoxes(amount)
  }
}
let amount = 0;
function onInputBlur(){
  amount = input.value;
}

// console.log(amount);
function createBoxes(amount){
  boxContainer.innerHTML = '';
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    boxContainer.insertAdjacentHTML('beforeend', elemDiv(width, height));
    width += 10;
      height += 10;
  }
  
// console.log(element);
input.value = '';
}
function elemDiv(width, height){
  
  return `<div class="box" style="width: ${width}px;height: ${height}px;background-color: ${getRandomHexColor()};"></div>`

}
// console.log(elemDiv())

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
console.log(getRandomHexColor());

function destroyBoxes(){
  while(boxContainer.firstChild) {
    boxContainer.removeChild(boxContainer.firstChild);
  }
}