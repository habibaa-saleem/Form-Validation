function validateSignIn() {
    var username = document.getElementById("signInUsername").value.trim();
    var password = document.getElementById("signInPassword").value.trim();

    if (username === "") {
        alert("Username cannot be empty");
        return false;
    }

    if (password === "") {
        alert("Password cannot be empty");
        return false;
    }

    alert("Sign in successful!");
    return true;

}
function isValidEmail(email) {
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    var specialCharRegex = /(?=.*[!@#$%^&*(),.?":{}|<>])/;
    var numericRegex = /(?=.*\d)/;
    return specialCharRegex.test(password) && numericRegex.test(password);
}

function isValidPhoneNumber(phone) {
    var phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phone);
}

function isValidAge(age) {
    return !isNaN(age) && age >= 18 && age <= 100;
}

function validateSignUp() {
    var username = document.getElementById("signUpUsername").value.trim();
    var password = document.getElementById("signUpPassword").value.trim();
    var email = document.getElementById("email").value.trim();
    var age = document.getElementById("age").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var address = document.getElementById("address").value.trim();
    var city = document.getElementById("city").value.trim();
    var country = document.getElementById("country").value.trim();

    if (username === "") {
        alert("Username cannot be empty");
        return false;
    }

    if (password === "") {
        alert("Password cannot be empty");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Password must contain at least one special character and one numeric character");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Invalid email address");
        return false;
    }

    if (!isValidAge(age)) {
        alert("Age must be a valid number between 18 and 100");
        return false;
    }

    if (!isValidPhoneNumber(phone)) {
        alert("Invalid phone number");
        return false;
    }

    if (address === "") {
        alert("Address cannot be empty");
        return false;
    }

    if (city === "") {
        alert("City cannot be empty");
        return false;
    }

    if (country === "") {
        alert("Country cannot be empty");
        return false;
    }

    alert("Sign up successful!");
    return true;
}