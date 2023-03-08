const cart_row = document.querySelector(".cart-row");

const array = localStorage.getItem("cart");
const selectedItems = JSON.parse(array);

function productCount(selectedItems) {
  return selectedItems.length;
}

function productsSum(selectedItems) {
  let ProductsSum = 0;
  selectedItems.forEach((el) => {
    ProductsSum += el.price * el.quantity;
  });
  return Math.floor(ProductsSum);
}
productsSum(selectedItems);

function productsOff(selectedItems) {
  let discountSum = 0;
  selectedItems.forEach((el) => {
    discountSum += (el.price * el.discount * el.quantity) / 100;
  });
  return Math.floor(discountSum);
}
productsOff(selectedItems);

function productsAfterOff(selectedItems) {
  let discountSum = 0;
  selectedItems.forEach((el) => {
    discountSum += (el.price * (100 - el.discount) * el.quantity) / 100;
  });
  return Math.ceil(discountSum);
}
productsAfterOff(selectedItems);

function bonus(selectedItems) {
  let discountSum = 0;
  selectedItems.forEach((el) => {
    discountSum += (el.price * (100 - el.discount) * el.quantity) / 100;
  });
  return Math.floor(discountSum / 10);
}
bonus(selectedItems);

let buy_desc = document.querySelector("#buy-desc");

function getItemCostDesc() {
  return `
  <p class="main-p">Списать 200 ₽</p>
  <p class="main-p">На карте накоплено 200 ₽</p>
   <div class="item">
  <div class="seperate-border">
  <div
                    class="all-item d-flex justify-content-between align-items-center"
                  >
                    <p class="main-p m-0">${productCount(selectedItems)}
                    товара</p>
                    <p class="main-p m-0">${productsSum(selectedItems)} ₽</p>
                    </div>
                    <div
                    class="all-item d-flex justify-content-between align-items-center"
                    >
                    <p class="main-p m-0">Скидка</p>
                    <p class="main-p off m-0">-${productsOff(
                      selectedItems
                    )} ₽</p>
                    </div>
                    </div>
                    <div
                    class="all-item d-flex justify-content-between align-items-center mt-3"
                    >
                    <p class="main-p m-0">Итог</p>
                    <h3 class="little-h m-0">${productsAfterOff(
                      selectedItems
                    )} ₽</h3>
                    </div>
                    <div
                    class="product-bonus d-flex justify-content-center align-items-center mt-2"
                    >
                    <img src="./image/bonus-icon.png" alt="" />
                    <p class="little-p m-0 ms-2 color-green">
                    Вы получяете ${bonus(selectedItems)} бонусов
                    </p>
                    </div>
                    <button class="book-btn w-100 mt-4">Оформить заказ</button>
                    </div>
                    `;
}

buy_desc.innerHTML = getItemCostDesc();

function getOffCost(discount, price, quantity) {
  return `${Math.floor((price * quantity * (100 - discount)) / 100)}`;
}
function getProductCost(price, quantity) {
  return Math.floor(price * quantity);
}

function getCartProduct({ name, image, price, discount, id, quantity }) {
  return `
  <div class="mt-3">
  <div class="card">
  <div class="d-flex flex-wrap">
  <div class="col-3 col-md-2 p-0">
  <img
  src=${image}
  
  class="card-img-top w-100"
  alt="..."
  />
  </div>
  <div class="col-9 col-md-5 p-1 ps-2">
  <div class="card-body p-0">
  <div
  class="d-flex justify-content-between align-items-center"
  >
            <h5 class="card-title">${name}</h5>
          </div>

          <div class="d-flex align-items-center">
          <p class="card-text">
          ${price} ₽ <p class = "little-p ms-2">за шт.</p>
          <span class="product-discount"
          >${discount} %</span
          >
          </p>
          </div>
          </div>
          </div>
          <div class="res-view col-12 col-md-5 p-1 d-flex">  <div
          class="count-product col-6 d-flex p-1 align-items-center"
          >
          <button
          class="btn-left btn btn-primary"
          onclick="changeQuantity('-', ${id})"
          >
          -
          </button>
          <span>${quantity}</span>
          <button
          class="btn-right btn btn-primary"
          onclick="changeQuantity('+', ${id})"
          >
          +
          </button>
          </div>
          <div class="col-6 p-1">
          
          <p class="card-text huge-p text-end m-0">${getOffCost(
            discount,
            price,
            quantity
          )} ₽</p>
            <p class="card-text text-end m-0 deleteCost">${getProductCost(
              price,
              quantity
            )} ₽</p>
            </div>
            </div> 
            </div>
            </div>
            </div>
            `;
}

cart.forEach((el) => {
  cart_row.innerHTML += getCartProduct(el);
});

function changeQuantity(status, id) {
  let product = cart.find((el) => el.id == id);
  if (status == "-") {
    if (product.quantity == 1) {
      cart = cart.filter((el) => el.id != id);
    }
  }
  cart = cart.map((el) => {
    if (el.id == id) {
      status == "+" ? el.quantity++ : el.quantity--;
    }
    return el;
  });
  setCart();
  window.location.reload();
}
