const form = document.getElementById("loginForm");

        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get email and password values
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Call authentication function with email and password
            const authenticated = authentication(email, password);

            // Check authentication result
            if (authenticated) {
                // Redirect to the new page
                window.location.href = "index.html";
            } else {
                alert("Incorrect email or password.");
            }
        });

        // Sample authentication function (replace with your actual logic)
        function authentication(email, password) {
            // For demonstration purposes, using hardcoded credentials
            const validEmail = "user@example.com";
            const validPassword = "password123";

            // Check if the provided email and password match the valid credentials
            return email === validEmail && password === validPassword;
        }