function ShowAlert() {
  alert("Click Me Button clicked using HTML Events");
}

document.getElementById("clickButton").addEventListener("click", ShowAlert2);

function ShowAlert2() {
  alert("Click Me Button clicked using JS Events");
}

document.getElementById("box").addEventListener("click", () => {
  document.getElementById("box").innerText = "The Box Was Clicked";
});

document.getElementById("box2").addEventListener("mouseenter", () => {
  document.getElementById("box2").innerText = "The mouse Entered to Box";
});
document.getElementById("box2").addEventListener("mouseout", () => {
  document.getElementById("box2").innerText = "The mouse Exit From Box";
});

document.getElementById("nameSubmit").addEventListener("click", () => {
  console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("fullName").addEventListener("keydown", (e) => {
  e.key === "Enter" &&
    console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("LoginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Login Done");
});