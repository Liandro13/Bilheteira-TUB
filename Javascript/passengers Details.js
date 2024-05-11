        // JavaScript code to handle the "Add Passenger" button click
        const addPassengerButton = document.getElementById('add-passenger-btn');
        const passengerDetailsContainer = document.getElementById('passenger-details');
        let passengerCount = 1;
      
        addPassengerButton.addEventListener('click', () => {
          passengerCount++;
          const newPassengerGroup = document.createElement('div');
          newPassengerGroup.className = 'passenger-group';
          newPassengerGroup.innerHTML = `
            <h3>Passenger ${passengerCount}</h3>
            <div class="elem-group">
              <label for="passenger${passengerCount}-name">Name</label>
              <input type="text" id="passenger${passengerCount}-name" name="passenger${passengerCount}_name" placeholder="Jane Doe" pattern="[A-Z\sa-z]{3,20}" required>
            </div>
            <div class="elem-group">
              <label for="passenger${passengerCount}-email">E-mail</label>
              <input type="email" id="passenger${passengerCount}-email" name="passenger${passengerCount}_email" placeholder="jane.doe@email.com" required>
            </div>
            <div class="elem-group">
              <label for="passenger${passengerCount}-phone">Phone</label>
              <input type="tel" id="passenger${passengerCount}-phone" name="passenger${passengerCount}_phone" placeholder="498-348-3872" pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})" required>
            </div>
            <div class="elem-group">
              <label for="passenger${passengerCount}-dob">Date of Birth</label>
              <input type="date" id="passenger${passengerCount}-dob" name="passenger${passengerCount}_dob" required>
            </div>
            <div class="elem-group">
              <label for="passenger${passengerCount}-room-selection">Gender</label>
              <select id="passenger${passengerCount}-room-selection" name="passenger${passengerCount}_room_preference" required>
                <option value="">Choose a gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="button" class="delete-passenger-btn">Delete Passenger</button>
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

date = (currentDateTime.getDate() + 1);

if(date < 10) {
  date = '0' + date;
}
if(month < 10) {
  month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinElem = document.querySelector("#checkin-date");
var checkoutElem = document.querySelector("#checkout-date");

checkinElem.setAttribute("min", dateTomorrow);

checkinElem.onchange = function () {
    checkoutElem.setAttribute("min", this.value);
}
