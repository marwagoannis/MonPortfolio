const btn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// 1. Vérifie si un thème est déjà enregistré dans le navigateur
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    btn.textContent = '☀️';
}

// 2. Gère le clic sur le bouton
btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    let theme = 'light';
    if (document.body.classList.contains('dark-theme')) {
        theme = 'dark';
        btn.textContent = '☀️';
    } else {
        btn.textContent = '🌙';
    }
    
    // 3. Enregistre le choix dans le localStorage
    localStorage.setItem('theme', theme);
});
