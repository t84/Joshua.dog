document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.querySelector('#darkModeButton');

    // Load dark mode preference from localStorage
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeButton.textContent = '☀️'; // Update button text
    }

    darkModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        // Update button text
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            darkModeButton.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            darkModeButton.textContent = '🌙';
        }
    });
});