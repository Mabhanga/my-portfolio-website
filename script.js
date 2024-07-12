document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('.content section');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Get target section ID

            sections.forEach(function(section) {
                section.style.display = 'none'; // Hide all sections
            });

            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block'; // Show target section
            }
        });
    });
});
