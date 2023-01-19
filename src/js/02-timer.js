
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const refs = {
  input: document.querySelector(`#datetime-picker`),
  button: document.querySelector(`[data-start]`),
  days: document.querySelector(`[data-days]`),
  hourse: document.querySelector(`[data-hours]`),
  minutes: document.querySelector(`[data-minutes]`),
  seconds: document.querySelector(`[data-seconds]`),
  timer: document.querySelector(`.timer`)
};



refs.button.disabled = true;
// let condition = false;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
        if (selectedDates[0] - new Date() < 0) {
         Notiflix.Notify.failure(`Please choose a date in the future`);
        }
        if (selectedDates[0] - new Date() > 0) {
        refs.button.disabled = false;
        refs.button.addEventListener(`click`, () => {
        // if (!condition) { 
        refs.button.disabled = true;
        // condition = true;
        let dateSubtraction = selectedDates[0] - new Date();
        let { days, hours, minutes, seconds } = convertMs(dateSubtraction);
        refs.days.textContent = days;
        refs.hourse.textContent = hours;
        refs.minutes.textContent = minutes;
          refs.seconds.textContent = seconds;
          refs.input.disabled = true;
        const intevalTime = setInterval(() => {
          let dateSubtraction = selectedDates[0] - new Date();
          let { days, hours, minutes, seconds } = convertMs(dateSubtraction);
          refs.days.textContent = days;
          refs.hourse.textContent = hours;
          refs.minutes.textContent = minutes;
          refs.seconds.textContent = seconds;
         
            if (refs.days.textContent === `00` && refs.hourse.textContent === `00` &&
                refs.minutes.textContent === `00` && refs.seconds.textContent === `00` ) {
              clearInterval(intevalTime)
          }
        }, 1000);
      // }
    });  
  }
  },  
};

flatpickr(refs.input, options);
function addLeadingZero(value) {
  return String(value).padStart(2, `0`);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
