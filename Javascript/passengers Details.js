// JavaScript code to handle the "Add Passenger" button click
const addPassengerButton = document.getElementById('add-passenger-btn');
const passengerDetailsContainer = document.getElementById('passenger-details');
let passengerCount = 1;

addPassengerButton.addEventListener('click', () => {
  passengerCount++;
  const newPassengerGroup = document.createElement('div');
  newPassengerGroup.className = 'passenger-group';
  newPassengerGroup.innerHTML = `
    <h3>Passageiro ${passengerCount}</h3>
    <div class="elem-group">
      <label for="passenger${passengerCount}-name">Nome</label>
      <input type="text" id="passenger${passengerCount}-name" name="passenger${passengerCount}_name" placeholder="Nome do passageiro" pattern="[A-Z\sa-zÀ-ÿ]{3,20}" required>
    </div>
    <div class="elem-group">
      <label for="passenger${passengerCount}-email">E-mail</label>
      <input type="email" id="passenger${passengerCount}-email" name="passenger${passengerCount}_email" placeholder="email@exemplo.com" required>
    </div>
    <div class="elem-group">
      <label for="passenger${passengerCount}-phone">Telefone</label>
      <input type="tel" id="passenger${passengerCount}-phone" name="passenger${passengerCount}_phone" placeholder="Número de telefone" pattern="(\d{9}|9[1236]\d{7})" required>
    </div>
    <div class="elem-group">
      <label for="passenger${passengerCount}-dob">Data de Nascimento</label>
      <input type="date" id="passenger${passengerCount}-dob" name="passenger${passengerCount}_dob" required>
    </div>
    <div class="elem-group">
      <label for="passenger${passengerCount}-room-selection">Género</label>
      <select id="passenger${passengerCount}-room-selection" name="passenger${passengerCount}_room_preference" required>
        <option value="">Escolha um género</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
        <option value="outro">Outro</option>
      </select>
    </div>
    <button type="button" class="delete-passenger-btn">Eliminar Passageiro</button>
  `;
  passengerDetailsContainer.appendChild(newPassengerGroup);

  // Attach event listener to the newly added delete button
  const deletePassengerButtons = document.getElementsByClassName('delete-passenger-btn');
  for (let i = 0; i < deletePassengerButtons.length; i++) {
    deletePassengerButtons[i].addEventListener('click', () => {
      newPassengerGroup.remove();
    });
  }
});

// Code to set the minimum date of checkout calendar to the next day after check-in
const currentDateTime = new Date();
const year = currentDateTime.getFullYear();
let month = currentDateTime.getMonth() + 1;
let date = (currentDateTime.getDate() + 1);

if (date < 10) {
  date = '0' + date;
}
if (month < 10) {
  month = '0' + month;
}

const dateTomorrow = year + "-" + month + "-" + date;
const checkinElem = document.querySelector("#checkin-date");
const checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}
