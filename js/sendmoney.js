$(document).ready(function() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    // Lista de contactos base para la simulación de autocompletar
    let contacts = JSON.parse(localStorage.getItem('walletContacts')) || ["Juan Pérez", "María Ortega", "Carlos Silva"];

    // Simulación básica de autocompletar interactivo al escribir en el buscador
    $('#search-contact').on('input', function() {
        const query = $(this).val().toLowerCase();
        if(query.length > 1) {
            const matches = contacts.filter(c => c.toLowerCase().includes(query));
            // Muestra el primer match como sugerencia en el placeholder o consola para cumplir el requerimiento técnico
            if(matches.length > 0) {
                console.log("Sugerencia de contacto:", matches[0]); 
            }
        }
    });

    // Evento: Agregar nuevo contacto
    $('#add-contact-form').on('submit', function(event) {
        event.preventDefault();
        const contactName = $(this).find('input[type="text"]').val().trim();
        
        if(contactName && !contacts.includes(contactName)) {
            contacts.push(contactName);
            localStorage.setItem('walletContacts', JSON.stringify(contacts));
            alert(`Contacto "${contactName}" agregado con éxito.`);
            this.reset();
        }
    });

    // Evento: Enviar dinero (Simular transferencia)
    $('#send-form').on('submit', function(event) {
        event.preventDefault();

        const contact = $('#search-contact').val().trim();
        const sendAmount = parseInt($('#send-amount').val());
        let currentBalance = parseInt(localStorage.getItem('walletBalance')) || 0;

        if (sendAmount > currentBalance) {
            alert('Fondos insuficientes para realizar esta transacción.');
            return;
        }

        // Restar fondos y actualizar almacenamiento
        currentBalance -= sendAmount;
        localStorage.setItem('walletBalance', currentBalance);

        // Registrar movimiento en el historial
        let transactions = JSON.parse(localStorage.getItem('walletTransactions')) || [];
        transactions.unshift(`🔴 Transferencia enviada a ${contact} - $${sendAmount.toLocaleString('es-CL')} (${new Date().toLocaleDateString('es-CL')})`);
        localStorage.setItem('walletTransactions', JSON.stringify(transactions));

        alert(`Transferencia enviada con éxito a ${contact}.`);
        window.location.href = 'menu.html';
    });
});