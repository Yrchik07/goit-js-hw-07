{/* <ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Parsley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul> */}

const x = document.querySelector('ul#categories');

const q = x.childNodes;
const w = x.querySelector('text');
const y = x.children.length;


// const q = y.forEach();
// y.forEach(function (number, index) {
//     console.log(`Index ${index}, value ${number}`);
//   });

// const y = x.textContent('h2');
console.log(x);
console.log(y);
console.log(q);
console.log(w);
// console.log(x.textContent('h2'));