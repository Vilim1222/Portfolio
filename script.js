function animateContact() {
    document.querySelector('.container').classList.add('active');
}

function goToContact() {
    window.location.href = 'contact.html'; // Zamijeni sa stvarnom URL adresom
}

/* Import the Swiss 721 font document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("animated-text");

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
*/
