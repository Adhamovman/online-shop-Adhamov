const exact_products_row = document.querySelector("#exact-products-row");

let text = localStorage.getItem("category");
let obj = JSON.parse(text);
for (el of products) {
  if (obj === el.category) {
    exact_products_row.innerHTML += getCard(
      el.name,
      el.category,
      el.description,
      el.price,
      el.rating,
      el.discount,
      el.image,
      el.id,
    );
  }
}
let this_product = document.querySelectorAll(".this-product");
function getProductName() {
  return `${obj}`;
}
for (el of this_product) {
  el.innerHTML = getProductName();
}

