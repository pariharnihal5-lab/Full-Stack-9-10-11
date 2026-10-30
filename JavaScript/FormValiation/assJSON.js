const form = document.getElementById("registrationForm");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        document.getElementById("checkEmail").addEventListener("click", function () {
            if (emailInput.checkValidity()) {
                document.getElementById("emailResult").textContent =
                    "Email field is valid.";
            } else {
                document.getElementById("emailResult").textContent =
                    "Please enter a valid email address.";
                emailInput.reportValidity();
            }
        });

        document.getElementById("checkPassword").addEventListener("click", function () {
            const password = passwordInput.value;

            if (password.length >= 8 && password.length <= 20) {
                document.getElementById("passwordResult").textContent =
                    "Password length is valid.";
            } else {
                document.getElementById("passwordResult").textContent =
                    "Password must contain between 8 and 20 characters.";
            }
        });

        form.addEventListener("submit", function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();

                document.getElementById("formResult").textContent =
                    "Please complete all fields correctly.";
            } else {
                event.preventDefault();

                document.getElementById("formResult").textContent =
                    "Registration successful! All fields passed validation.";
            }
        });