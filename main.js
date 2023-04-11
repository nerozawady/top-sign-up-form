const EInputs = document.querySelectorAll("input");
const ESubmit = document.querySelector("[type='submit']");
const EForm = document.querySelector("form");
const EFirstName = document.querySelector("#first-name");

EForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = new FormData(EForm);
    const values = [...form.entries()];
    console.log(values);

    const password = form.get("password");
    const passwordRetyped = form.get("confirmPassword");

    if (password !== passwordRetyped) {
        document.querySelector("#password").classList.add("invalid");
        document.querySelector("#confirm-password").classList.add("invalid");
        document.querySelector("#password-error").textContent = "Passwords do not match";
        return false;
    } else {
        document.querySelector("#password").classList.remove("invalid");
        document.querySelector("#confirm-password").classList.remove("invalid");
        document.querySelector("#password-error").textContent = "";
    }

    EForm.reset();
});