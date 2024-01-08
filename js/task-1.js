const categoryItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) =>{
  const catTitle = item.querySelector("h2").textContent;
  const catLi = item.querySelectorAll("li");
  console.log(`Category: ${catTitle}`);
  console.log(`Elements: ${catLi.length}`)
})
