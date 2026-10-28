```javascript
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("formMessage").textContent =
        "Thank you, " + name + "! Your message has been received.";

    form.reset();
});
```
