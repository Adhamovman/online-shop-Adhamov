const Favourite_row = document.querySelector(".liked-row");

function getCartProduct({
  name,
  category,
  description,
  price,
  rating,
  discount,
  image,
  id,
}) {
  return `
  <div class="card w-100">
    <div class="card-head">  <img src= ${image} class="card-img-top" alt="...">
     <img onclick="addProductToFavourite(${id})" class="like" class="like" src="./image/${
      favourite.find((el) => el.id == id) ? "like.png" : "likedd.svg"
    }" alt="">
      <p class="product-discount m-0">
     -${discount}% 
      </p>
    </div>
      <div class="card-body p-2">
      <div class="product-info d-flex justify-content-between align-items-center">
      <div class="cost-info">  <h5 class="huge-p m-0">${price} ₽</h5>
        <p class="little-p m-0">
        С картой
        </p></div>
        <p class="category-p">${category}</p>
      </div>
        <h5 class="card-title">${name}</h5>
     <div class="product-desc">   <p class="card-text"> ${description}</p>
     </div>
        <div class="stars-row mb-1">
          ${getRating(rating)}
        </div>
        <button onclick="addProductToCart(${id})" id="${name}" class="btn btn-primary w-100 btn-main">В корзину</button>
      </div>
    </div>
`;
}

function addProductToFavourite(id) {
  let product = products.find((product) => product.id === id);
  if (favourite.find((el) => el.id == id)) {
    favourite = favourite.filter((el) => el.id != id);
    window.location.reload();
  } else {
    favourite.push(product);
  }
  setFavouriteCart();
}

favourite.forEach((el) => {
  Favourite_row.innerHTML += getCartProduct(el);
});

let notFound = document.querySelector("#not-found");
if (!favourite.length) {
  notFound.classList.remove("hide");
} else {
  notFound.classList.add("hide");
}
