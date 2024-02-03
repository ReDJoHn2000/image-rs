const colorChange = document.querySelector('[name="base"]');
const sizeChange = document.querySelector('[name="spacing"]');
const blurChange = document.querySelector('[name="blur"]');
const invertChange = document.querySelector('[name="invert"]');
const sepiaChange = document.querySelector('[name="sepia"]');
const saturateChange = document.querySelector('[name="saturate"]');
const rotateChange = document.querySelector('[name="hue-rotate"]');
const image = document.querySelector('[src="img/lenna.png"]');

colorChange.addEventListener("input", (el) => {
  el.target.value = event.target.value;

  document.body.style.backgroundColor = el.target.value;
});

sizeChange.addEventListener("input", (el) => {
  let size = el.target.value + "%";

  image.style.width = size;
});

blurChange.addEventListener("input", (el) => {
  //   console.log(el.target.value);
  let blurImg = el.target.value + "px";

  image.style.filter = `blur(${blurImg})`;
});

invertChange.addEventListener("input", (el) => {
  let inversion = el.target.value + "%";

  // console.log(inversion);

  image.style.filter = `invert(${inversion})`;
});

sepiaChange.addEventListener("input", (el) => {
  let sepia = el.target.value + "%";

  // console.log(sepia);

  image.style.filter = `sepia(${sepia})`;
});

saturateChange.addEventListener("input", (el) => {
  let saturate = el.target.value + "%";

  // console.log(saturate);

  image.style.filter = `saturate(${saturate})`;
});

rotateChange.addEventListener("input", (el) => {
  let degree = el.target.value + "deg";

  // console.log(degree);

  image.style.filter = `hue-rotate(${degree})`;
});
