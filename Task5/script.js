const inputField = document.getElementById("inputField");
const btn = document.getElementById("btn");
const para = document.getElementById("para");

btn.addEventListener("click", function() {
    para.textContent = inputField.value;
});