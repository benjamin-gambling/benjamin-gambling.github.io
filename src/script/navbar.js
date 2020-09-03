const body = document.body;
const nav = document.querySelector(".navbar");
const popoverLink = document.querySelectorAll("[data-popover]");
const popover = document.querySelectorAll(".popover");

const listeners = () => {
  window.addEventListener("scroll", fixednav);
  popoverLink.forEach((dropdown) =>
    dropdown.addEventListener("click", (e) => openPop(e, dropdown))
  );
  document.addEventListener("click", closePop);
};

const fixednav = () => {
  window.pageYOffset >= window.innerHeight
    ? body.classList.add("has-docked-nav")
    : body.classList.remove("has-docked-nav");
};

const openPop = (e, drop) => {
  e.preventDefault();
  closePop();
  drop.nextElementSibling.classList.add("open");
  e.stopImmediatePropagation();
};

const closePop = () => {
  const popOpen = document.querySelectorAll(".popover.open");
  if (popOpen.length > 0)
    popOpen.forEach((elem) => {
      elem.classList.remove("open");
    });
};

listeners();
