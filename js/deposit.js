$(document).ready(function() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    $('#deposit-form').on('submit', function(event) {
        event.preventDefault();

        const depositAmount = parseInt($('#amount').val());

        if (isNaN(depositAmount) || depositAmount <= 0) {
            alert('Por favor, ingresa un monto válido.');
            return;
        }

        // Obtener saldo actual, sumar el depósito y guardar
        let currentBalance = parseInt(localStorage.getItem('walletBalance')) || 0;
        currentBalance += depositAmount;
        localStorage.setItem('walletBalance', currentBalance);

        // Registrar la transacción en el historial simulado
        let transactions = JSON.parse(localStorage.getItem('walletTransactions')) || [];
        transactions.unshift(`🟢 Depósito recibido - $${depositAmount.toLocaleString('es-CL')} (${new Date().toLocaleDateString('es-CL')})`);
        localStorage.setItem('walletTransactions', JSON.stringify(transactions));

        // Feedback visual interactivo mediante jQuery
        alert(`¡Depósito exitoso! Se han abonado $${depositAmount.toLocaleString('es-CL')} a tu cuenta.`);
        
        // Redireccionar al menú principal para ver el saldo actualizado
        window.location.href = 'menu.html';
    });
});