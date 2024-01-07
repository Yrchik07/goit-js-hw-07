const catItem = document.querySelectorAll('.item');
console.log("Number of categories:", catItem.length);

catItem.forEach((item) =>{
  const catTitle = item.querySelector("h2").textContent;
  const catLi = item.querySelectorAll("li");
  console.log("Category:", catTitle);
  console.log("Elements:", catLi.length)
})
