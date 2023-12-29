const container = document.querySelector('#controls');
const input = container.querySelector('input');
const create = container.querySelector('button');
const box = document.querySelector('#boxes');

// console.log(container);
// console.log(input);
// console.log(create);
// console.log(box);
input.addEventListener('blur', onInputBlur);
create.addEventListener('click', onClickBtn);
function onClickBtn(){
  if(amount >= 1 & amount <= 100){
    console.log(amount);
    createBoxes(amount)
  }
}
let amount = 0;
function onInputBlur(){
  amount = input.value;
}

// console.log(namber);
function createBoxes(amount){
console.log('hello')
}





// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
