var button = document.getElementById("hoverButton");
    
button.addEventListener("mouseover", function() {
    button.textContent = "ABHI KARO ORDER";
});

button.addEventListener("mouseout", function() {
    button.textContent = "jaO";
});