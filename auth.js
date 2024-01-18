document.addEventListener("DOMContentLoaded", function () {
    // Function to handle sign-up
    document.getElementById("signupForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const signupEmail = document.getElementById("signupEmail").value;
        const signupPassword = document.getElementById("signupPassword").value;

        // Save user information in local storage
        localStorage.setItem("userEmail", signupEmail);
        localStorage.setItem("userPassword", signupPassword);

        alert("Sign-up successful! You can now log in.");
    });

    // Function to handle login
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const loginEmail = document.getElementById("loginEmail").value;
        const loginPassword = document.getElementById("loginPassword").value;

        // Retrieve user information from local storage
        const storedEmail = localStorage.getItem("userEmail");
        const storedPassword = localStorage.getItem("userPassword");

        // Check if the entered credentials match the stored ones
        if (loginEmail === storedEmail && loginPassword === storedPassword) {
            alert("Login successful!");
        } else {
            alert("Invalid login credentials. Please try again.");
        }
    });
});
