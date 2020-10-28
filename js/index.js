document.querySelector('.switch-theme').addEventListener('click', switchTheme);

function switchTheme() {
    const light = 'https://bootswatch.com/4/cosmo/bootstrap.min.css';
    const dark = 'https://bootswatch.com/4/darkly/bootstrap.min.css';
    const themeLink = document.querySelector('.theme-link');
    themeLink.href = themeLink.href === light ? dark : light;
}
