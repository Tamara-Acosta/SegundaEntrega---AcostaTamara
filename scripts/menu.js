document.addEventListener('DOMContentLoaded', () => {
    //Selecciona el botón y el menú por sus ID
    const btnMenu = document.getElementById('btn-menu');
    const menuNav = document.getElementById('menu-nav');

    // Verificacion
    if (btnMenu && menuNav) {
    
        btnMenu.addEventListener('click', () => {
            //Alternar la clase 'menu-abierto' en el elemento <nav>
            // desde el css - modifica la visibilidad y el layout con la clase - menu-abierto
            menuNav.classList.toggle('menu-abierto'); // toggle-alternar entre dos estados 
        });
    }
});