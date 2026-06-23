$(document).ready(function() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    const $listContainer = $('#transactions-list');
    let transactions = JSON.parse(localStorage.getItem('walletTransactions')) || [];

    // Si hay transacciones dinámicas registradas por el usuario, limpiamos las estáticas y cargamos las nuevas
    if (transactions.length > 0) {
        $listContainer.empty(); // Limpia el contenedor HTML antiguo
        
        // Iterar y mostrar cada elemento del historial
        transactions.forEach(function(tx) {
            $listContainer.append(`<li>${tx}</li>`);
        });
    }
});