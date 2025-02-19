document.addEventListener("DOMContentLoaded", function () {
    // Provjera postoji li element s klasom 'container'
    let container = document.querySelector('.container');

    if (container) {
        setTimeout(() => {
            container.classList.add('active');
        }, 2000); // 2 sekunde kašnjenja
    } else {
        console.error("Element '.container' nije pronađen! Provjeri HTML strukturu.");
    }

    // Postavi event listener za klik na contact box
    let contactBox = document.querySelector('.contact-box');
    if (contactBox) {
        contactBox.addEventListener("click", function () {
            window.location.href = 'contact.html'; // Zamijeni sa stvarnom URL adresom
        });
    }
});

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
/*
