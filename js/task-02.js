// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   }
//   // {
//   //   url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//   //   alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   // },
//   // {
//   //   url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//   //   alt: 'Group of Horses Running',
//   // },
//   // {
//   //   url:
//   //     'https://images.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   //   alt: 'Elephant Beside on Baby Elephant',
//   // },
//   // {
//   //   url:
//   //     'https://images.pexels.com/photos/37833/rainbow-lorikeet-parrots-australia-rainbow-37833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   //   alt: 'Blue Geeen and Orange Parrot',
//   // },
//   // {
//   //   url:
//   //     'https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   //   alt: 'Zebras on Zebra',
//   // },
// ];
// const list = document.querySelector(".gallery");
// console.log(list);
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);
// const listImg = document.createElement("img");
// lastItem.append(listImg)

// const [{url, alt}] = images;
// console.log(url)
// console.log(alt)


// const x = images.map((imag) => {
//   const y = imag.url;
//   const q = imag.alt;

//   return {y, q};
// });

// console.log(x)


const images = [{x: 10, y: 20}, {x: 30, y: 40}];

// Цикл для обхода всех объектов
for (let i = 0; i < images.length; i++) {
  const image = images[i];
  const x = image.x;
  const y = image.y;
  // console.log("x:", x, "y:", y);
}


images.map((image) => {
  const x = image.x;
  const y = image.y;
  console.log("x:", x, "y:", y);
});






// // Метод map() для получения нового массива значений x и y
// const xyArray = images.map(image => {
//   const x = image.x;
//   const y = image.y;
//   return {x, y};
// });
// console.log(x);






// const list = document.querySelector(".gallery");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item"><img class="list-img"></li>`)
//   // .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");


// ul.after(el1, el2, ...)
// const image = document.querySelector(".image");
// console.log(image.hasAttribute("src")); // true
// console.log(image.hasAttribute("href")); // false