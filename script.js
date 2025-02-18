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
            index = (index + 1) % texts.length; 
            textElement.innerText = texts[index];

            textElement.style.opacity = 1; 
            textElement.style.transform = "translateY(0)"; 
        }, 800); 
    }

    setInterval(changeText, 3000);
});
