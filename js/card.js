function getRating(rating) {
  let res = "";
  let star_count = 0;
  let full_star = parseInt(rating);
  let rest_star = rating - full_star;
  star_count = full_star;
  res = Array(full_star)
    .fill(`<img src="./image/ful-star.png" alt="">`)
    .join("");
  if (0.25 <= rest_star && rest_star <= 0.5) {
    star_count++;
    res += `<img src="./image/half-star.png" alt="">`;
  }
  if (0.5 < rest_star) {
    star_count++;
    res += `<img src="./image/ful-star.png" alt="">`;
  }
  free_star = 5 - star_count;
  res += Array(free_star)
    .fill(`<img src="./image/empty-starr.png" alt="">`)
    .join("");
  return res;
}

function getCard(
  name,
  category,
  description,
  price,
  rating,
  discount,
  image,
  id
) {
  return `  <div class="card w-100">
    <div class="card-head">  <img src= ${image} class="card-img-top" alt="...">
     <img onclick="addProductToFavourite(${id})" class="like" src="./image/${
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
    </div>`;
}
// ${getLikeImg(true)}
function addProductToCart(id) {
  let product = products.find((product) => product.id === id);
  if (cart.find((el) => el.id == id)) {
    cart = cart.map((el) => {
      if (el.id == id) {
        el.quantity++;
      }
      return el;
    });
  } else {
    product.quantity = 1;
    cart.push(product);
  }
  setCart();
  getCartLength();
}

function addProductToFavourite(id) {
  let product = products.find((product) => product.id === id);
  if (favourite.find((el) => el.id == id)) {
    favourite = favourite.filter((el) => el.id != id);
  } else {
    favourite.push(product);
  }
  setFavouriteCart();
  window.location.reload();
}
