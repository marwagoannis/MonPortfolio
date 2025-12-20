const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Change l'icône selon le mode
    if (document.body.classList.contains('dark-theme')) {
        btn.textContent = '☀️';
    } else {
        btn.textContent = '🌙';
    }
});
