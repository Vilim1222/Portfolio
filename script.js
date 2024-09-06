document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll('.photo');
    photos.forEach((photo, index) => {
        setTimeout(() => {
            photo.classList.add('visible');
        }, index * 100);
    });
});
