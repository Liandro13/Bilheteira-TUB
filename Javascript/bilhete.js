// Script para exibir os dados do bilhete
window.onload = function() {
    const ticketContent = document.getElementById('ticket-content');
    const bookedData = JSON.parse(localStorage.getItem('booked'));

    if (bookedData && Array.isArray(bookedData)) {
        bookedData.forEach((reservation, index) => {
            if (reservation.passengers && reservation.passengers.length > 0) {
                reservation.passengers.forEach((passenger, passengerIndex) => {
                    const passengerDiv = document.createElement('div');
                    passengerDiv.className = 'passenger-info';
                    passengerDiv.innerHTML = `
                        <h2>Passageiro ${passengerIndex + 1}</h2>
                        <p><strong>Nome:</strong> ${passenger.name}</p>
                        <p><strong>Email:</strong> ${passenger.email}</p>
                        <p><strong>Telefone:</strong> ${passenger.phone}</p>
                        <p><strong>Data de Nascimento:</strong> ${passenger.dob}</p>
                        <p><strong>Género:</strong> ${passenger.gender}</p>
                        <p><strong>Lugar do Autocarro:</strong> ${reservation.id}</p>
                        <p><strong>Categoria:</strong> ${reservation.category}</p>
                        <p><strong>Preço:</strong> ${reservation.price}€</p>
                    `;
                    ticketContent.appendChild(passengerDiv);
                });
            } else {
                const reservationDiv = document.createElement('div');
                reservationDiv.className = 'reservation-info';
                reservationDiv.innerHTML = `
                    <h2>Reserva ${index + 1}</h2>
                    <p><strong>Lugar do Autocarro:</strong> ${reservation.id}</p>
                    <p><strong>Categoria:</strong> ${reservation.category}</p>
                    <p><strong>Preço:</strong> EUR ${reservation.price}</p>
                `;
                ticketContent.appendChild(reservationDiv);
            }
        });

        // Gerar QR Code
        const qrCodeDiv = document.createElement('div');
        qrCodeDiv.id = 'qrcode';
        ticketContent.appendChild(qrCodeDiv);

        const qrCodeUrl = `https://example.com/reservation?id=${bookedData[0].id}`;
        new QRCode(document.getElementById('qrcode'), qrCodeUrl);
    } else {
        ticketContent.innerHTML = '<p>Nenhum dado encontrado.</p>';
    }

    // Função de reembolso
    document.getElementById('refund-button').addEventListener('click', function() {
        if (confirm("Tens a certeza que queres cancelar a reserva?") === true) {
            localStorage.removeItem('booked');
            alert("O reembolso será processado nas próximas 24 horas.");
            window.location.href = 'home.html';
        }
    });
};