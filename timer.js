// Business Days and Holiday Counter

// Get UI Elements
let startDate = document.getElementById('start-date'),
    endDate   = document.getElementById('end-date'),
    form      = document.getElementById('timer-form'),
    display   = document.getElementById('timer-results');

// Event Handlers
form.addEventListener('submit', getRange);

// Functions
function getRange(e) {
  const start = Date.parse(startDate.value), // Date.parse returns the number of milliseconds
        end   = Date.parse(endDate.value);

  
  // calculate the diference between the days
  const diff = end - start;
  // console.log(diff);

  // Convert the diff (milliseconds) into days
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));

  // Declare vars for business days and working days (excluding public holiday days)
  let bizDays = 0;
  let workingDays = 0;

  const startDay = new Date(start);
  // console.log(startDay.toLocaleDateString());

  // Loop through to determine the holiday days and business working days
  for (let i = 0; i < days; i++) {
    const d = dayPlus(startDay, i);
    if (isNotWeekend(d)) {
      bizDays++;
    }
    if (isWorkingDay(d)) {
      workingDays++;
    }
  }

  // Paint the calculated days into the UI (using template literals)
  display.innerHTML = `
              <div id="results">
                <div>
                  <span class="days">${days}</span>
                  <div class="smalltext">Days</div>
                </div>
                <div>
                  <span class="bizDays">${bizDays}</span>
                  <div class="smalltext">Business Days</div>
                </div>
                <div>
                  <span class="workingDays">${workingDays}</span>
                  <div class="smalltext">Working days</div>
                </div>
              <div>
                    `;

  e.preventDefault();
  
}

function dayPlus(date, inc) {
  const d = new Date(date.getTime());
  d.setUTCDate(date.getUTCDate() + inc);
  return d;
}

function isNotWeekend(day) {
  return day.getDay() !== 0 && day.getDay() !== 6;
}

// Calculate the Holiday days
function isWorkingDay(date) {

  // Store some Finnish Holiday days into an array
  const publicHolidays = [
    '01/01/2019', // New years Day
    '06/01/2019', // Epiphany Day
    '19/04/2019', // Good friday
    '22/04/2019', // Easter Monday
    '01/05/2019', // May Day
    '24/12/2019', // Christmas Eve
    '25/12/2019', // Christmas
    '26/12/2019' // Boxing Day
  ]

  // return the values for both the business days and holiday days
  return isNotWeekend(date) && publicHolidays.indexOf(date.toLocaleDateString()) === -1;
}

