const a2th = document.querySelector(".navbar__link-name:nth-child(2)");

function toggleClick() {
  const menu = this.querySelector(".navbar__link-menu");
  menu.classList.toggle("hide");
}

function hideClick() {
  const menu = document.querySelector(".navbar__link-menu");
  menu.classList.add("hide");
}

a2th.addEventListener("click", toggleClick);

document.addEventListener("click", (event) => {
  const a2th = event.target.closest(".navbar__link-name:nth-child(2)");
  if (!a2th && event.currentTarget !== a2th) {
    hideClick();
  }
});
