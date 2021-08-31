const h1Tag = document.querySelector("h1");

const headerImg = document.querySelector(".intro img");

h1Tag.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "red";
  h1Tag.classList.add("grow");
});

headerImg.addEventListener("click", (event) => {
  event.target.style.borderRadius = "25px";
});
