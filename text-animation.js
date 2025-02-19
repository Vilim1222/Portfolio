/*document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");

    const texts = [
        "VILIM TAVČAR",
        "Zagreb, Croatia",
        "vilim.tavcar@gmail.com"
    ];

    let index = 0;

    function changeText() {
        textElement.style.opacity = 0; // Fade out

        setTimeout(() => {
            textElement.innerText = texts[index]; // Change text
            textElement.style.opacity = 1; // Fade in
            index = (index + 1) % texts.length; // Loop through texts
        }, 500); // Wait for fade out animation
    }

    setInterval(changeText, 3000);
});
