// ==========================================================================
const burger = document.querySelector(
  ".header__container__parhead__nav__ul__responsive"
);
const iwq = document.querySelector(".iwq");

const navLinks = document.querySelectorAll(".mobile-nav-links");
// ===========================================================================
burger.addEventListener("click", () => {
  if (burger.classList.contains("change")) {
    burger.classList.remove("change");
  } else {
    burger.classList.add("change");
  }

  if (iwq.classList.contains("show")) {
    iwq.classList.remove("show");
  } else {
    iwq.classList.add("show");
  }
});
// ========================================================================
navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    iwq.classList.remove("show");
    burger.classList.remove("change");
  });
});
// accord
const acc = document.querySelectorAll("#accordion");
let i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight + 55}px`;
    }
  });
}
