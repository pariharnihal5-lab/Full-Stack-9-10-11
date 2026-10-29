function Login() {
  const un = document.getElementById("userName").value.trim();
  const ps = document.getElementById("password").value;

  console.log(un, ps);

  const LoginFromDataJson = {
    Name: un,
    password: ps,
  };
}

const loginFrom = document.getElementById("loginForm");

loginFrom.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("form submitted");

  const loginFromData = new FormData(loginFrom);

  const UN = loginFromData.get("userName");
  const PS = loginFromData.get("password");

  console.log(UN, PS);

  loginFromData.forEach((value, key) => console.log(key, ":", value));
});

const TestFrom = document.getElementById("testform");

const testFromDataJSON = {};
TestFrom.addEventListener("submit", (e) => {
  e.preventDefault();

  const testFromData = new FormData(TestFrom);

  testFromData.forEach((value, key) => console.log(key, ":", value));

  testFromData.forEach((value, key) => (testFromDataJSON[key] = value));
});

console.log(testFromDataJSON);