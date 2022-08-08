const menu = document.querySelector(".menu");
const btn = document.querySelector(".btn");
// is - hidden
btn.addEventListener("click", openMenu);

function openMenu() {
  menu.classList.add("is-open");
  menu.classList.remove("is-hidden");
}

document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
      menu.classList.remove("is-open");
      menu.classList.add("is-hidden");
    }
});

document.addEventListener("click", function handleClickOutsideBox(event) {
  const box = document.getElementById('menu');

  if (!box.contains(event.target)) {
    console.log("HI")
  }
});

  // menu.classList.remove("is-open");
  // menu.classList.add("is-hidden");
// const open = menu.classList.add("is-open");
// console.log(menu);