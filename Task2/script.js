const para = document.getElementById("para");
const btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    para.textContent = "Paragraph text has been changed!";
})