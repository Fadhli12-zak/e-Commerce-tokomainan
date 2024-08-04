const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const x = document.getElementById("x");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (x) {
  x.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
console.log("debugg");
