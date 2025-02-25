

document.addEventListener("DOMContentLoaded", function () {
// Initialize EmailJS with your user ID
emailjs.init("lpOGiX8nFB5_DCf6m"); // Replace with your public key

// Select the form element
const form = document.getElementById("contact-form");

// Function to handle the form submission
const sendEmail = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Send the form using EmailJS
    emailjs.sendForm("service_xv0aakm", "template_95b69x2", form)
    .then(
        function (response) {
        console.log("SUCCESS!", response);
        alert("Message sent successfully!");

        form.reset();
        },
        function (error) {
        console.log("FAILED...", error);
        alert("Error sending message. Please try again.");
        }
    );
};

// Attach the sendEmail function to the form submission event
form.addEventListener("submit", sendEmail);
});


const currentYear = new Date().getFullYear();

document.getElementById("current-year").textContent = currentYear;
console.log("currentYear", currentYear);

document.addEventListener('DOMContentLoaded', function () {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x) { // Check if the element exists
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
        }
    }

    // Assign the function to the onclick event of the menu
    var menuIcon = document.querySelector(".icon");
    if (menuIcon) {
        menuIcon.addEventListener("click", myFunction);
    }
    });
