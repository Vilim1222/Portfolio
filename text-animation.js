    const texts = [
        "Zagreb, Croatia",
        "vilim.tavcar@gmail.com",
        "VILIM TAVČAR" // Dodajemo "VILIM TAVČAR" u rotaciju
    ];

    let index = 0;

    function changeText() {
        textElement.style.opacity = 0;
        textElement.style.transform = "translateY(10px)";

        setTimeout(() => {
            textElement.innerText = texts[index];
            textElement.style.opacity = 1;
            textElement.style.transform = "translateY(0)";
            index = (index + 1) % texts.length; // Rotira kroz sve tekstove
        }, 800);
    }

    // Pokreni prvu promjenu teksta nakon 3 sekunde
    setTimeout(() => {
        changeText(); // Prva promjena teksta
        setInterval(changeText, 3000); // Daljnje rotacije svakih 3 sekunde
    }, 3000);
});
