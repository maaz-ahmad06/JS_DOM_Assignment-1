const inputField = document.getElementById("inputField");
const btn = document.getElementById("btn");
const para = document.getElementById("para");

btn.onclick = function () {
    para.textContent = inputField.value;
}