document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const inputField = document.getElementById("inputField");
        const inputValue = inputField.value.trim();
        const errorMessage = document.querySelector(".error-message");

        if (inputValue === "") {
            // Show error and shake animation
            inputField.classList.add("shake");
            errorMessage.style.visibility = "visible";

            setTimeout(() => {
                inputField.classList.remove("shake");
                errorMessage.style.visibility = "hidden";
            }, 500);
        } else {
            // Display alert if input is valid
            alert("Valid Input");
        }
    });
});
