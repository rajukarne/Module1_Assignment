"use strict";
var _a;
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["Name"] = "Name must be at least 3 characters.";
    ErrorMessages["Email"] = "Invalid email format.";
    ErrorMessages["Password"] = "Password must be at least 8 characters.";
    ErrorMessages["ConfirmPassword"] = "Passwords do not match.";
})(ErrorMessages || (ErrorMessages = {}));
(_a = document.getElementById('registrationForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirmPassword').value.trim();
    let isValid = true;
    // Name validation
    if (name.length < 3) {
        document.getElementById('nameError').textContent = ErrorMessages.Name;
        isValid = false;
    }
    else {
        document.getElementById('nameError').textContent = "";
    }
    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = ErrorMessages.Email;
        isValid = false;
    }
    else {
        document.getElementById('emailError').textContent = "";
    }
    // Password validation
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = ErrorMessages.Password;
        isValid = false;
    }
    else {
        document.getElementById('passwordError').textContent = "";
    }
    // Confirm Password validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = ErrorMessages.ConfirmPassword;
        isValid = false;
    }
    else {
        document.getElementById('confirmPasswordError').textContent = "";
    }
    if (isValid) {
        alert("Registration successful!");
    }
});
