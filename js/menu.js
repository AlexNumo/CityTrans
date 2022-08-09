const menu = document.querySelector(".menu");
const btn = document.querySelector(".btn");
const closeBTN = document.querySelector(".close");
const count = document.querySelector(".textarea-position");
const textarea = document.querySelector('textarea');

btn.addEventListener("click", openMenu);
closeBTN.addEventListener("click", closeMenu);

function openMenu() {
  menu.classList.add("is-open");
  menu.classList.remove("is-hidden");
};
  
function closeMenu() {
  menu.classList.remove("is-open");
  menu.classList.add("is-hidden");
};

document.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    menu.classList.remove("is-open");
    menu.classList.add("is-hidden");
  }
});

function eventForm(value) {
  const valueMax = value;
  return document.getElementById("showMAx").innerHTML = valueMax;
};