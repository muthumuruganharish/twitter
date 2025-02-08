document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("#form");
    const username = document.querySelector(".username");
    const email1 = document.querySelector(".email1");
    const password = document.querySelector("#password");
    const confirmpassword = document.querySelector("#confirm-password");

    username.addEventListener("input", validateInput);
    email1.addEventListener("input", validateInput);
    password.addEventListener("input", validateInput);
    confirmpassword.addEventListener("input", validateInput);

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // prevents the form from submitting if there are errors
        validateInput();
    });

    function validateInput() {
        const usernameval = username.value.trim(); // trims the extra spaces
        const emailval = email1.value.trim();
        const passwordval = password.value.trim();
        const confirmpasswordval = confirmpassword.value.trim();

        if (usernameval === "") {
            setError(username, "Username is required");
        } else {
            setSuccess(username);
        }

        if (emailval === "") {
            setError(email1, "Email is required");
        } else {
            setSuccess(email1);
        }

        if (passwordval === "") {
            setError(password, "Password is required");
        } else if (passwordval.length < 8) {
            setError(password, "Password must be at least 8 characters long");
        } else {
            setSuccess(password);
        }

        if (confirmpasswordval === "") {
            setError(confirmpassword, "Password confirmation is required");
        } else if (confirmpasswordval !== passwordval) {
            setError(confirmpassword, "Passwords do not match");
        } else {
            setSuccess(confirmpassword);
        }
    }

    function setError(element, message) {
        const input1 = element.parentElement; // select the parent element
        const errorelement = input1.querySelector(".error"); // select the specific error element within the parent
        errorelement.innerText = message;
        input1.classList.add("error");
        input1.classList.remove("success");
    }

    function setSuccess(element) {
        const input1 = element.parentElement; // select the parent element
        const errorelement = input1.querySelector(".error"); // select the specific error element within the parent
        errorelement.innerText = ""; // remove error message if validation passes
        input1.classList.add("success");
        input1.classList.remove("error");
    }
});
