document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");

    const texts = [
        "Zagreb, Croatia",
        "vilim.tavcar@gmail.com",
        "VILIM TAVČAR" // Ovo će se pojaviti opet, ali tek nakon cijelog ciklusa
    ];

    let index = 0; // Počinje od drugog teksta jer je "VILIM TAVČAR" već vidljiv

    function changeText() {
        textElement.style.opacity = 0;
        textElement.style.transform = "translateY(10px)";

        setTimeout(() => {
            textElement.innerText = texts[index];
            textElement.style.opacity = 1;
            textElement.style.transform = "translateY(0)";
            index = (index + 1) % texts.length; // Nastavlja u krug
        }, 800);
    }

    setTimeout(() => {
        changeText(); // Prva promjena teksta nakon 3 sekunde
        setInterval(changeText, 3000); // Daljnje rotacije teksta
    }, 3000);
});
