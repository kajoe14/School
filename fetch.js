// Task 2 - Search for Cars

// Get UI
let search = document.getElementById('search-plate');

search.addEventListener('change', (e) => {
  // Get UI
  console.log(e.target.value);
  // fetch cars
  fetch('cars.json')
    .then(res => {
      return res.json();
      // console.log(res.json());
    })
    .then(data => {
      let output = '';
      data.forEach((car, index) => {
        if (car.Plate == search.value) {
          output += ` <div class="row">
                        <div class="twelve columns">
                          <div class="row">
                            <h2>${car.Plate}<h2>
                          </div>
                          <div class="row">
                            <div class="six columns">
                              <p>CAR MAKE: <strong>${car.Make}</strong></p>
                              <p>CAR MODEL: <strong>${car.Model}</strong></p>  
                            </div>  
                            <div class="six columns">
                              <p>COLOR: <strong>${car.Color}</strong></p>
                              <p>YEAR: <strong>${car.Year}</strong></p>
                            </div>
                          </div>
                          <div class="row">
                            <div class="twleve columns">PRICE: <h2>${car.Price}<h2></div>
                          </div>
                        </div>
                      </div>`;
        }


      });

      document.getElementById('search-list').innerHTML = output;
      console.log(output);
    })
    .catch(err => console.log(err));

});