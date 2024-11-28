function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show-menu');
}

document.querySelectorAll('.navbar__links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.remove("active"); 
    });
});