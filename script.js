
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.filterButtons button');
    const cards = document.querySelectorAll('.card');
    const limit = 100; // Set the limit of visible images

    // Function to filter the cards based on the selected category
    function filterCards(category) {
        let count = 0;

        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-name');

            if (category === 'all' || cardCategory === category) {
                // Only show the cards if the limit is not exceeded
                if (count < limit) {
                    card.style.display = 'block';
                    count++;
                } else {
                    card.style.display = 'none';
                }
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Add click event listener for all filter buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-name');

            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Call the filter function with the selected category
            filterCards(category);
        });
    });

    // Initially show all images
    filterCards('ssall');
});

