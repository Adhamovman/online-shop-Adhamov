let results = document.querySelector(".results");
let allProductsRow = document.querySelector("#all-products-row");
let search = document.querySelector(".search-product");
function getAllProducts(products) {
  allProductsRow.innerHTML = "";
  for (el of products) {
    allProductsRow.innerHTML += getCard(
      el.name,
      el.category,
      el.description,
      el.price,
      el.rating,
      el.discount,
      el.image,
      el.id
    );
  }
}

getAllProducts(products);
let notFound = document.querySelector("#not-found");
search.addEventListener("input", () => {
  let res = [];
  for (el of products) {
    if (el.description.toLowerCase().includes(search.value.toLowerCase())) {
      res.push(el);
    }
  }
  getAllProducts(res);
  results.innerHTML = res.length ? `${res.length} results found` : "";
  if (!res.length) {
    notFound.classList.remove("hide");
  } else {
    notFound.classList.add("hide");
  }
});
