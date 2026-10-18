function b1ON() {
  const b1 = document.getElementById("bulb1");

  //   b1.style.backgroundColor = "yellow";

  b1.classList.add("b1");
}

function b1OFF() {
  const b1 = document.getElementById("bulb1");

  //   b1.style.backgroundColor = "white";
  b1.classList.remove("b1");
}

function b2ON_OFF() {
  const b2 = document.getElementById("bulb2");

  b2.classList.toggle("b2");
}

function b3ChangeColor() {
  const b3 = document.getElementById("bulb3");
  const color = document.getElementById("b3Color").value;

  b3.style.backgroundColor = color;
}

function b3Off() {
  const b3 = document.getElementById("bulb3");

  b3.style.backgroundColor = "white";
}