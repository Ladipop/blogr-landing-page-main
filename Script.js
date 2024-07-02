const listTriggers = document.querySelectorAll(".list-trigger");
const navSpans = document.querySelectorAll(".nav-span");
const productSpan = document.querySelector(".product-span");
const whiteDownArrows = document.querySelectorAll(".white-down-arrow");

listTriggers.forEach((listTrigger, index) => {
  listTrigger.nextElementSibling.classList.remove("active");
  const correspondingArrow = whiteDownArrows[index];
  const arrowUp = (arrow) => {
    arrow.classList.toggle("white-up-arrow");
  };

  listTrigger.addEventListener("click", () => {
    listTriggers.forEach((otherTrigger, otherIndex) => {
      if (otherTrigger !== listTrigger) {
        otherTrigger.nextElementSibling.classList.remove("active");
        whiteDownArrows[otherIndex].classList.remove("white-up-arrow");
      }
    });
    setTimeout(() => {
      listTrigger.nextElementSibling.classList.toggle("active");
      arrowUp(correspondingArrow);
    }, 0);
  });
});

// *************************************************//
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".icon-close");
const headerMainNav = document.querySelector(".header-main-nav");
const headerMainNavGlass = document.querySelector(".header-main-nav-glass");

console.log(headerMainNav);

hamburger.classList.remove("hamburger-display");
closeIcon.classList.remove("icon-close-display");

hamburger.addEventListener("click", () => {
  hamburger.classList.remove("hamburger-display");
  hamburger.style.display = "none";
  closeIcon.classList.add("icon-close-display");
  headerMainNav.style.display = "flex";
});
closeIcon.addEventListener("click", () => {
  hamburger.style.display = "block";
  hamburger.classList.add("hamburger-display");
  closeIcon.classList.remove("icon-close-display");
  headerMainNav.style.display = "none";
});
