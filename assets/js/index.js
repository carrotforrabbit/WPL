//header on scroll
let scrollpos = window.scrollY;

const header = document.querySelector("header");
const scrollChange = 500;

const add_class_on_scroll = () => header.classList.add("active");
const remove_class_on_scroll = () => header.classList.remove("active");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

//up button
let upBtn = document.querySelector(".up-button");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
