document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");

    const texts = [
        "VILIM TAVČAR",
        "Zagreb, Croatia",
        "vilim.tavcar@gmail.com"
    ];

    let index = 0;

    function changeText() {
        textElement.style.opacity = 0;
        textElement.style.transform = "translateY(10px)"; // Pomicanje prema dolje prije fade outa

        setTimeout(() => {
            index = (index + 1) % texts.length; // Ciklus kroz tekstove
            textElement.innerText = texts[index];

            textElement.style.opacity = 1;
            textElement.style.transform = "translateY(0)"; // Vraćanje na početnu poziciju s animacijom
        }, 800);
    }

    setInterval(changeText, 3000);
});
