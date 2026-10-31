const Form1 = document.getElementById("form1");

Form1.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(Form1);

  //If-else Statement to check fullName Validity
  const nm = formData.get("fullName");

  //   let isValid = true;
  //   for (var i = 0; i < nm.length; i++) {
  //     if (
  //       (nm.charAt(i) >= "A" && nm.charAt(i) <= "Z") ||
  //       (nm.charAt(i) >= "a" && nm.charAt(i) <= "z") ||
  //       nm.charAt(i) === " "
  //     ) {
  //       isValid = true;
  //     } else {
  //       isValid = false;
  //       break;
  //     }
  //   }

  //   if (/^[A-Za-z ]+$/.test(nm)) {
  //     console.log("Valid Name");
  //   } else {
  //     console.log("Invalid Name");
  //   }

  console.log(/^[A-Za-z ]+$/.test(nm) ? "Valid" : "Invalid");
  
  //   console.log(isValid ? "Valid" : "Invalid");
});