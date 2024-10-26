import flatpickr from 'flatpickr';
import iziToast from 'izitoast';

let userSelectedDate;
const dateTimeInput = document.querySelector('#datetime-picker');
const startBrn = document.querySelector('button[data-start]');
startBrn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      userSelectedDate = selectedDates[0];
      startBrn.disabled = false;
    } else {
      iziToast.show({
        title: 'Error',
        message: 'Please choose a date in the future!',
        color: 'red',
        position: 'topRight',
      });
      startBrn.disabled = true;
    }
  },
};

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

const dateTimeCalendar = flatpickr(dateTimeInput, options);

startBrn.addEventListener('click', event => {
  startBrn.disabled = true;
  dateTimeInput.disabled = true;
  let remainingMilliseconds = userSelectedDate - Date.now();

  const timer = setInterval(() => {
    remainingMilliseconds = userSelectedDate - Date.now();

    let remainingTime = convertMs(remainingMilliseconds);
    document.querySelector('span[data-days]').textContent = addLeadingZero(
      remainingTime.days
    );
    document.querySelector('span[data-hours]').textContent = addLeadingZero(
      remainingTime.hours
    );
    document.querySelector('span[data-minutes]').textContent = addLeadingZero(
      remainingTime.minutes
    );
    document.querySelector('span[data-seconds]').textContent = addLeadingZero(
      remainingTime.seconds
    );
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
    dateTimeInput.disabled = false;

    iziToast.show({
      title: 'Done',
      message: "Time's up!",
      color: 'green',
      position: 'topCenter',
    });
  }, remainingMilliseconds);
});
