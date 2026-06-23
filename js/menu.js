$(document).ready(function() {
    // Verificar si el usuario está logueado
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    // Cargar y mostrar el saldo actual de forma dinámica
    const currentBalance = parseInt(localStorage.getItem('walletBalance')) || 0;
    $('#total-balance').text(`$${currentBalance.toLocaleString('es-CL')}`);

    // Animación jQuery fluida al cargar el contenedor de saldo (Efecto UX)
    $('#balance-section').hide().fadeIn(800);
    $('#quick-actions').hide().delay(300).slideDown(600);
});