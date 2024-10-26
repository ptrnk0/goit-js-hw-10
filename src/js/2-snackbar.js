import iziToast from 'izitoast';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const delay = form.elements.delay.value;
  const state = form.elements.state.value;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (state) {
        case 'fulfilled':
          resolve(delay);
          break;

        case 'rejected':
          reject(delay);
          break;
      }
    }, delay);
  })
    .then(value => {
      iziToast.show({
        title: '&#9989;',
        message: `Fulfilled promise in ${value}ms`,
        color: 'green',
        position: 'topCenter',
      });
    })
    .catch(value => {
      iziToast.show({
        title: '&#10060;',
        message: `Rejected promise in ${value}ms`,
        color: 'red',
        position: 'topCenter',
      });
    });
});
