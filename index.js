
let password1 = document.querySelector(".password1");
let password2 = document.querySelector(".password2");
let showError = document.querySelector(".showError");

password2.addEventListener("change", () => {
    if (password1.value != password2.value) {
        password1.style.borderColor = "red";
        password2.style.borderColor = "red";
        showError.style.display = "block";
        showError.textContent = "passwords do not match";

    } 
    if (password1.value == password2.value) {
        password1.style.borderColor = "blue";
        password2.style.borderColor = "blue";
        showError.style.display = "none";
    }
})