const h1Tag = document.querySelector("h1");

const theFooter = document.querySelector("footer");

const headerImg = document.querySelector(".intro img");

const mapImg = document.querySelector(
  ".home .content-section .img-content img"
);

const theNav = document.querySelector("nav");

const contentSection = document.querySelector(".content-section");

const destinationImg = document.querySelector(".home .content-destination img");

theNav.addEventListener("click", (event) => {
  event.preventDefault();
});

h1Tag.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "red";
});

headerImg.addEventListener("click", (event) => {
  event.target.style.borderRadius = "25px";
});

document.addEventListener("keyup", (event) => {
  const keyName = event.key;
  if (keyName === "Shift") {
    alert("You pressed shift!");
  }
});

document.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toLowerCase());
  event.preventDefault();
});

headerImg.addEventListener("dragstart", (event) => {
  event.target.style.display = "none";
});

mapImg.addEventListener("dragend", (event) => {
  event.target.style.opacity = "0.5";
});

document.addEventListener("wheel", (event) => {
  event.target.style.fontSize = "large";
});

window.addEventListener("resize", (event) => {
  alert("You have resized the window");
});

destinationImg.addEventListener("dblclick", (event) => {
  event.target.style.boxShadow = "0 0 5px #999999";
});

document.addEventListener("contextmenu", (event) => {
  event.target.style.backgroundColor = "yellow";
});

// Stopping event propagation

mapImg.addEventListener("dblclick", (event) => {
  event.target.style.border = "thick solid black";
  event.stopPropagation();
});
contentSection.addEventListener("dblclick", (event) => {
  contentSection.style.border = "thick solid black";
});
