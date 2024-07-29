import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const elements = {
  btnStartTimer: document.querySelector('button[data-start]'),
  fieldDays: document.querySelector('span[data-days]'),
  fieldHours: document.querySelector('span[data-hours]'),
  fieldMinutes: document.querySelector('span[data-minutes]'),
  fieldSeconds: document.querySelector('span[data-seconds]'),
  inputDate: document.querySelector('#datetime-picker'),
};

let userSelectedDate = 0;
let currentTime = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = Number(selectedDates[0]);
    let differTime = userSelectedDate - currentTime;
    console.log(differTime);

    if (differTime <= 0) {
      alert('Please choose a date in the future');
      elements.btnStartTimer.disabled = true;
    } else {
      elements.btnStartTimer.disabled = false;
    }
  },
};

flatpickr('input#datetime-picker', options);

elements.btnStartTimer.addEventListener('click', handlerStartTimer);

function handlerStartTimer() {
  const settimeId = setInterval(getTime, 1000);
}

function getTime() {
  let currentTime = Date.now();
  let differTime = userSelectedDate - currentTime;
  if (differTime <= 0) {
    return;
  }

  let restOfTime = convertMs(differTime);

  elements.fieldDays.textContent = restOfTime.days;
  elements.fieldHours.textContent = addLeadingZero(restOfTime.hours);
  elements.fieldMinutes.textContent = addLeadingZero(restOfTime.minutes);
  elements.fieldSeconds.textContent = addLeadingZero(restOfTime.seconds);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}