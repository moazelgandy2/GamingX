import { UI } from "./ui.module.js";
import { Games } from "./games.module.js";

const nav = document.querySelector(".nav");
const navDown = document.querySelector(".nav-down");
const showBtn = document.querySelector(".show-btn");
const showBtnSm = document.querySelector(".show-btn-sm");
const hideBtn = document.querySelector(".hide-btn");
const hideBtnSm = document.querySelector(".hide-btn-sm");

hideBtn.addEventListener("click", () => {
  nav.classList.add("opacity-0");
  nav.classList.add("d-none");
  hideBtn.classList.add("hidden");
  showBtn.classList.remove("d-none");
  hideBtn.classList.add("d-none");
});

showBtn.addEventListener("click", () => {
  nav.classList.remove("opacity-0");
  nav.classList.remove("d-none");
  showBtn.classList.add("d-none");
  hideBtn.classList.remove("d-none");
});

hideBtnSm.addEventListener("click", () => {
  navDown.classList.add("opacity-0");
  navDown.classList.add("d-none");
  hideBtnSm.classList.add("hidden");
  showBtnSm.classList.remove("d-none");
  hideBtnSm.classList.add("d-none");
});

showBtnSm.addEventListener("click", () => {
  navDown.classList.remove("d-none");
  showBtnSm.classList.add("d-none");
  hideBtnSm.classList.remove("d-none");
});

if (window.innerWidth > 580) {
  showBtnSm.classList.add("d-none");
} else {
  hideBtnSm.classList.add("d-none");
  navDown.classList.add("d-none");
  showBtnSm.classList.remove("d-none");
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 580) {
    showBtnSm.classList.add("d-none");
  } else {
    hideBtnSm.classList.add("d-none");
    navDown.classList.add("d-none");
    showBtnSm.classList.remove("d-none");
  }
});

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    document.querySelector(".gameDetailsCard").innerHTML = "";
  }
});
new Games();
// ! Second slect option
