// Accordion Functionality
const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true' || false;
        button.setAttribute('aria-expanded', !expanded);

        const content = button.nextElementSibling;
        if (!expanded) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
        
        accordionButtons.forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.setAttribute('aria-expanded', false);
                otherButton.nextElementSibling.style.display = 'none';
            }
        });
    });
});
