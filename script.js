document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordian-wrapper .accordian');

    accordions.forEach((accordion) => {
        accordion.addEventListener('click', () => {
            // Toggle the 'active' class on the clicked accordion
            accordion.classList.toggle('active');

            // Get the content panel inside the clicked accordion
            const content = accordion.querySelector('.accordian-content');

            // Toggle the display of the content panel
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
