window.addEventListener('load', function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 200);
});

document.querySelectorAll("[data-copy]").forEach(function(element) {
    element.addEventListener("click", function() {
        let cont = this.getAttribute('content').trim();
        navigator.clipboard.writeText(cont);

        let bcmElement = document.getElementById("bcm");
        bcmElement.style.display = "flex";
        setTimeout(function() {
            bcmElement.style.display = "none";
        }, 3200);
    });
});