document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Form submitted! (This is just a demo.)');
        // Here you would typically handle form submission, e.g., using fetch or XMLHttpRequest
    });
});
