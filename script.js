document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");

    const texts = [
        "VILIM TAVČAR",
        "Zagreb, Croatia",
        "vilim.tavcar@gmail.com"
    ];

    let index = 0; // Počinje s "VILIM TAVČAR"

    function changeText() {
        textElement.style.opacity = 0;
        textElement.style.transform = "translateY(10px)";

        setTimeout(() => {
            index = (index + 1) % texts.length; // Prebacuje na sljedeći tekst
            textElement.innerText = texts[index];

            textElement.style.opacity = 1;
            textElement.style.transform = "translateY(0)";
        }, 800);
    }

    setTimeout(() => {
        textElement.style.opacity = 1; // Odmah prikaži "VILIM TAVČAR"
        textElement.style.transform = "translateY(0)";
    }, 200); // Blagi delay da ne bude naglo

    setInterval(changeText, 3000);
});
