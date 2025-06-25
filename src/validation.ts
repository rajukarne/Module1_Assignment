interface User {
    name: string;
    email: string;
    password: string;
}

enum ErrorMessages {
    Name = "Name must be at least 3 characters.",
    Email = "Invalid email format.",
    Password = "Password must be at least 8 characters.",
    ConfirmPassword = "Passwords do not match."
}

document.getElementById('registrationForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    let name = (document.getElementById('name') as HTMLInputElement).value.trim();
    let email = (document.getElementById('email') as HTMLInputElement).value.trim();
    let password = (document.getElementById('password') as HTMLInputElement).value.trim();
    let confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value.trim();

    let isValid: boolean = true;

    // Name validation
    if (name.length < 3) {
        (document.getElementById('nameError') as HTMLElement).textContent = ErrorMessages.Name;
        isValid = false;
    } else {
        (document.getElementById('nameError') as HTMLElement).textContent = "";
    }

    // Email validation
    let emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        (document.getElementById('emailError') as HTMLElement).textContent = ErrorMessages.Email;
        isValid = false;
    } else {
        (document.getElementById('emailError') as HTMLElement).textContent = "";
    }

    // Password validation
    if (password.length < 8) {
        (document.getElementById('passwordError') as HTMLElement).textContent = ErrorMessages.Password;
        isValid = false;
    } else {
        (document.getElementById('passwordError') as HTMLElement).textContent = "";
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        (document.getElementById('confirmPasswordError') as HTMLElement).textContent = ErrorMessages.ConfirmPassword;
        isValid = false;
    } else {
        (document.getElementById('confirmPasswordError') as HTMLElement).textContent = "";
    }

    if (isValid) {
        alert("Registration successful!");
    }
});
