$(document).ready(function() {
    $('#login-form').on('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue

        const email = $('#email').val().trim();
        const password = $('#password').val().trim();

        // Validación simulada de credenciales
        if (email === "user@alkewallet.com" && password === "123456") {
            // Guardamos un estado de sesión básico en localStorage
            localStorage.setItem('isLoggedIn', 'true');
            if (!localStorage.getItem('walletBalance')) {
                localStorage.setItem('walletBalance', '150000'); // Saldo inicial predeterminado
            }
            
            // Redirección al menú principal
            window.location.href = 'menu.html';
        } else {
            alert('Credenciales incorrectas. Intenta con user@alkewallet.com y 123456');
        }
    });
});