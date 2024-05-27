var firstSeatLabel = 1;
var booked = !!localStorage.getItem('booked') ? JSON.parse(localStorage.getItem('booked')) : [];
var sc; // Definir sc no escopo global

$(document).ready(function() {
    var $cart = $('#selected-seats'),
        $counter = $('#counter'),
        $total = $('#total');

    sc = $('#bus-seat-map').seatCharts({
        map: [
            'ff_ff',
            'ff_ff',
            'ee_ee',
            'ee_ee',
            'ee___',
            'ee_ee',
            'ee_ee',
            'ee_ee',
            'eeeee',
        ],
        seats: {
            f: {
                price: 4,
                classes: 'first-class', //your custom CSS class
                category: 'Lugar com direito a Malas'
            },
            e: {
                price: 2,
                classes: 'economy-class', //your custom CSS class
                category: 'Classe Económica'
            }

        },
        naming: {
            top: false,
            getLabel: function(character, row, column) {
                return firstSeatLabel++;
            },
        },
        legend: {
            node: $('#legend'),
            items: [
                ['f', 'available', 'Lugar com direito a Malas'],
                ['e', 'available', 'Classe Económica'],
                ['f', 'unavailable', 'Reservado']
            ]
        },
        click: function() {
            if (this.status() == 'available') {
                //let's create a new <li> which we'll add to the cart items
                $('<li>' + this.data().category + ' Lugar Nº ' + this.settings.label + ': <b><EUR ' + this.data().price + '</b> <a href="#" class="cancel-cart-item">[Clica para Cancelar]</a></li>')
                    .attr('id', 'cart-item-' + this.settings.id)
                    .data('seatId', this.settings.id)
                    .appendTo($cart);

                /*
                 * Lets update the counter and total
                 *
                 * .find function will not find the current seat, because it will change its status only after return
                 * 'selected'. This is why we have to add 1 to the length and the current seat price to the total.
                 */
                $counter.text(sc.find('selected').length + 1);
                $total.text(recalculateTotal(sc) + this.data().price);

                return 'selected';

            } else if (this.status() == 'selected') {

                //update the counter
                $counter.text(sc.find('selected').length - 1);

                //and total
                $total.text(recalculateTotal(sc) - this.data().price);

                //remove the item from our cart
                $('#cart-item-' + this.settings.id).remove();

                //seat has been vacated
                return 'available';

            } else if (this.status() == 'unavailable') {
                //seat has been already booked
                return 'unavailable';
            } else {
                return this.style();
            }
        }
    });

    // This will handle "[cancel]" link clicks
    $('#selected-seats').on('click', '.cancel-cart-item', function() {
        // Let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
        sc.get($(this).parents('li:first').data('seatId')).click();
    });

    // Let's mark already booked seats as unavailable
    booked.forEach(function(seat) {
        sc.get(seat.id).status('unavailable');
    });
});

function recalculateTotal(sc) {
    var total = 0;

    // Basically find every selected seat and sum its price
    sc.find('selected').each(function() {
        total += this.data().price;
    });

    return total;
}

$(function() {
    $('#checkout-button').click(function() {
        var items = $('#selected-seats li');
        if (items.length <= 0) {
            alert("Seleciona um lugar!");
            return false;
        }
        var selected = [];
        items.each(function() {
            var id = $(this).data('seatId');
            var seatData = sc.get(id).data();
            selected.push({
                id: id,
                price: seatData.price,
                category: seatData.category
            });
        });
        if (booked.length > 0) {
            booked.forEach(function(seat) {
                selected.push(seat);
            });
        }

        // Transformar e adicionar o valor "lugar"
        selected.forEach(function(seat) {
            seat.lugar = transformarId(seat.id);
        });

        localStorage.setItem('booked', JSON.stringify(selected));
        alert("Lugar Reservado com sucesso");
        location.reload();
    });

    $('#reset-btn').click(function() {
        if (confirm("Tens a certeza que queres cancelar a reserva?") === true) {
            localStorage.removeItem('booked');
            alert("Cancelado com sucesso!");
            location.reload();
        }
    });
});

// Função para transformar os IDs conforme especificado
function transformarId(id) {
    const [fila, coluna] = id.split('_').map(Number);
    const novoId = (fila - 1) * 4 + coluna; // Fórmula para transformar o ID
    return novoId.toString();
}
