const fname = document.getElementById("fname");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorName = document.getElementById("error");
const errorPassword = document.getElementById("errorPassword");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent refresh

    errorName.innerHTML = '';
    errorPassword.innerHTML = '';
    let message = [];

    if (fname.value === "" || fname.value == null) {
        message.push("Name is required");
    }

    if (password.value.length <= 6) {
        message.push("Password must be longer than 6 characters");
    }

    if (password.value.length >= 15) {
        message.push("Password must be less than 15 characters");
    }

    if (message.length > 0) {


        if (message.includes('Name is required')) {
            errorName.innerHTML = 'Name is required';
        }

        if (message.includes('Password must be longer than 6 characters')) {
            errorPassword.innerHTML = 'Password must be longer than 6 characters';
        }

        if (message.includes('Password must be less than 15 characters')) {
            errorPassword.innerHTML = 'Password must be less than 15 characters';
        }
    }

    if (message.length === 0) {
        if ((fname.value.toLowerCase() == "admin") && (password.value == "123123123")) {
            console.log('admin credentials are correct');
            window.location.href = "./admin.html";
        }
        else if (fname.value.toLowerCase() !== "admin") {
            console.log("Incorrect User Name")
            errorName.innerHTML = 'Incorrect User Name';
        }

        else if (password.value != "123123123") {
            console.log("Incorrect Password")
            errorPassword.innerHTML = 'Incorrect Password';
        }
        else {
            e.preventDefault();
            console.log('incorrect admin credentials');
        }
    }

    console.log(message);
});
