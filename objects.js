// Objects

// Task 1 and Task 3 (Discount calculation)

// Car Class 
class Car {
  constructor(license, maker, model, price, color, year) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.price = price;
    this.color = color;
    this.year = year;
  }
}

// UI Class
class UI {

  addCar(car) {
    // preview car into table

    let table = document.getElementById('car-list');

    // Claculate Discount
    let discount = '';
    if (car.price >= 20000) {
      discount += 0.75 * car.price;
    } else if (car.price <= 5000) {
      discount += 0.9 * car.price;
    } else {
      discount += 0.85 * car.price;
    }

    let row = document.createElement('tr');
    row.innerHTML = `
                    <td>${car.license}</td>
                    <td>${car.maker}</td>
                    <td>${car.model}</td>
                    <td>${car.color}</td>
                    <td>${car.year}</td>
                    <td>${car.price}</td>
                    <td class="discount">${discount}</td>
                    `;

    table.appendChild(row);

  }

  // Clear Fields
  clearFields() {
    document.getElementById('license-plate').value = '';
    document.getElementById('car-maker').value = '';
    document.getElementById('car-model').value = '';
    document.getElementById('car-price').value = '';
    document.getElementById('car-color').value = '';
    document.getElementById('car-year').value = '';
  }

  
}

// Get UI
let form = document.getElementById('car-info');

// Event Listeners
form.addEventListener('submit', (e) => {
  const license = document.getElementById('license-plate').value,
    maker = document.getElementById('car-maker').value,
    model = document.getElementById('car-model').value,
    price = document.getElementById('car-price').value,
    color = document.getElementById('car-color').value,
    year = document.getElementById('car-year').value;

  // Inst car object
  let car = new Car(license, maker, model, price, color, year);

  // Inst UI
  const ui = new UI();

  // add car
  ui.addCar(car);

  // Clear Fields
  ui.clearFields();

  e.preventDefault();
});
