const container = document.querySelector('#controls');
const input = container.querySelector('input');
const createButton = container.querySelector('button');
const destroyButton = container.lastElementChild;
const boxContainer = document.querySelector('#boxes');

input.addEventListener('blur', inputBlur);
createButton.addEventListener('click', clickBtn);
destroyButton.addEventListener('click', destroyBoxes);

function clickBtn(){
    createBoxes(numberInput)
  }

let numberInput = '';
function inputBlur(){
  if(input.value >= 1 && input.value <= 100){
    numberInput = input.value;
  }
}
function createBoxes(amount){
  boxContainer.innerHTML = '';
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    boxContainer.insertAdjacentHTML('beforeend', elemDiv(width, height));
    width += 10;
      height += 10;
  }
  
input.value = '';
numberInput = '';
}
function elemDiv(width, height){
  return `<div class="box" style="width: ${width}px;height: ${height}px;background-color: ${getRandomHexColor()};"></div>`
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes(){
  while(boxContainer.firstChild) {
    boxContainer.removeChild(boxContainer.firstChild);
  }numberInput = '';
}
