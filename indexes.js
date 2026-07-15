(function () {
    emailjs.init("vyWZhMxwpOqm5Kykb");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_4cet1bj",
        "template_6q3urha",
        this
    ).then(
        function () {
            alert("✅ Message sent successfully!");
            document.getElementById("contact-form").reset();
        },
        function (error) {
            alert("❌ Failed to send message");
            console.log("EmailJS Error:", error);
        }
    );
});
