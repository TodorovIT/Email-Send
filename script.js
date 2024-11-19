        (function() {
            emailjs.init("YOUR_PUBLIC_KEY");
        })();
    
        document.getElementById("contactForm").addEventListener("submit", function(e) {
            e.preventDefault();
    
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;
            const status = document.getElementById("status");
    
            status.textContent = "Sending...";
    
            // Изпращане на имейл чрез EmailJS
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
                name: name,
                email: email,
                message: message
            })
            .then(() => {
                status.textContent = "Email sent successfully!";
            }, (err) => {
                status.textContent = "Failed to send email: " + JSON.stringify(err);
            });
        });
