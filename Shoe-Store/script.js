// Grab elements
let subscribe = document.getElementById("subscribe");
let contact = document.getElementById("contactform");
let clickme = document.getElementById("thanksBtn");

// Feature 1: Subscribe button interaction
function handleSubscribe() {
    subscribe.textContent = "Subscribed";
    subscribe.disabled = true; // prevents clicking again
}
subscribe.addEventListener('click', handleSubscribe);

// Feature 2: Thank-you button
clickme.addEventListener('click', function () {
    alert("Thank you for clicking the button!");
});

// Custom Form Validation
function contact_action(event) {
    event.preventDefault(); // stop normal submission

    // Clear previous messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("formSuccess").textContent = "";

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let isValid = true;

    // Name check
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
        isValid = false;
    }

    // Email check with regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }

    // Message check
    if (message.length < 10) {
        document.getElementById("messageError").textContent = "Message should be at least 10 characters.";
        isValid = false;
    }

    // If all passes
    if (isValid) {
        document.getElementById("formSuccess").textContent = "Form submitted successfully!";

        // Clear form inputs
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        // Optional: trigger mail client
        alert("Form submitted successfully! Opening mail client...");
        window.location.href = `mailto:obaloluwao008@gmail.com?subject=Message from ${name}&body=${message}`;
    }
}
contact.addEventListener('submit', contact_action);
