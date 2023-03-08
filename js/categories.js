const categories = [
  { name: "Fruit", image: "https://picsum.photos/200/300/?category0" },
  { name: "Bakery", image: "https://picsum.photos/200/300/?category2" },
  {
    name: "Vegetable",
    image: "https://picsum.photos/200/300/?category3",
  },
  { name: "Dairy", image: "https://picsum.photos/200/300/?category5" },
  { name: "Meat", image: "https://picsum.photos/200/300/?category6" },
  {
    name: "Dessert",
    image: "https://picsum.photos/200/300/?category7",
  },
  {
    name: "Fast food",
    image: "https://picsum.photos/200/300/?category12",
  },
  {
    name: "Breakfast",
    image: "https://picsum.photos/200/300/?category23",
  },
  { name: "Lunch", image: "https://picsum.photos/200/300/?category27" },
  {
    name: "Dinner",
    image: "https://picsum.photos/200/300/?category31",
  },
];

function getCategoryCard(name, image) {
  return ` <a href="category.html" id="${name}" onclick="getId(this)">    <div class="category-card">
          <img src="${image}" alt="" /> 
            <div  class="back-gradient">
               <p class="huge-p category-card-text m-0">${name}</p>
            </div>
         </div> </a>`;
}

let category_row = document.getElementById("category-row");
for (el of categories) {
  category_row.innerHTML += getCategoryCard(el.name, el.image);
}
let card_category = document.querySelectorAll(".category-card");

function getId(categoryCard) {
  for (el of categories) {
    if (categoryCard.id === el.name) {
      const myJSON = JSON.stringify(el.name);
      localStorage.setItem("category", myJSON);
    }
  }
}

