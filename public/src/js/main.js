// js/main.js

// Grab the button and the body element
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check if the user already chose a theme in the past
const currentTheme = localStorage.getItem('theme');

// Apply the saved theme and set the correct bracketed text
if (currentTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggleBtn.textContent = '[ ☀️ Light ]'; 
} else {
    themeToggleBtn.textContent = '[ 🌙 Dark ]';
}

// Listen for clicks on the button
themeToggleBtn.addEventListener('click', () => {
    // Toggle the dark theme class
    body.classList.toggle('dark-theme');
    
    // Update the button text and save to local storage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '[ ☀️ Light ]';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '[ 🌙 Dark ]';
    }
});