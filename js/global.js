function tooglePanel() {
  let catalogPanel = document.querySelector(".catalog-panel");
  catalogPanel.classList.toggle("d-none");
}

const open_btn = document.querySelector(".open-modal");
const open_phone_btn = document.querySelector(".open-phone-modal");

const close_btn = document.querySelector(".close-modal");
const modal = document.querySelector(".modall");
const modal_content = document.querySelector(".modal-content");

function modalShow() {
  modal.classList.add("modal-show");
  modal_content.classList.add("modal-content-show");
}

function modalHide() {
  modal.classList.remove("modal-show");
  modal_content.classList.remove("modal-content-show");
}

open_btn.addEventListener("click", modalShow);
open_phone_btn.addEventListener("click", modalShow);

close_btn.addEventListener("click", modalHide);

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modalHide();
  }
});

window.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    modalHide();
  }
});
