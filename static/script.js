window.addEventListener('load', function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 200);
});

document.getElementById("email").addEventListener("click", function() {
    let email = this.textContent.trim();
    navigator.clipboard.writeText(email)

    let bcmElement = document.getElementById("bcm");
    bcmElement.style.display = "flex";
    setTimeout(function() {
        bcmElement.style.display = "none";
    }, 3200);
});
