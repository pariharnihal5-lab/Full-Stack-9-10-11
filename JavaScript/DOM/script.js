let text = document.querySelector("h1").innerText;
console.log(text + "Raj");

function submit(){
    console.log("Submit Button Clicked");
    

const nm =document.querySelector("#Fullname").value;
const em =document.querySelector("#Email").value;

console.log("Fullname:",nm);
console.log("Email:",em);

}
function submit2() {
  const formData = [];

  document.querySelectorAll("input, select").forEach((item) => {
    formData.push(item.value.trim());
  });

  const fieldName = [];
  document.querySelectorAll("input, select").forEach((item) => {
    fieldName.push(item.name);
  });

  for (var i = 0; i < fieldName.length; i++) {
    console.log(fieldName[i] + " : " + formData[i]);
  }
}