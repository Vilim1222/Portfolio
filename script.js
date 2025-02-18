document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");

    const texts = [
        "Zagreb, Croatia",
        "vilim.tavcar@gmail.com",
        "VILIM TAVČAR"
    ];

    let index = 0; // Počinje od drugog teksta jer je prvi već prikazan

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
        setInterval(changeText, 3000); // Pokreće rotaciju teksta nakon prvog prikaza
    }, 3000); // Pauza od 3 sekunde prije nego što krene animacija
});
