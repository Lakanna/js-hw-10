import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
  form: document.querySelector('.js-form'),
  btnSubmit: document.querySelector('button'),
};

elements.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evn) {
  evn.preventDefault();

  const { delay, state } = evn.currentTarget.elements;
  const promisDelay = delay.value;
  const promisState = state.value;

  const promis = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (promisState === 'fulfilled') {
        resolve(`${promisDelay}`);
      } else {
        reject(`${promisDelay}`);
      }
    }, `${promisDelay}`);
  });

  promis
    .then(value =>
      iziToast.show({
        title: 'Hey',
        message: `✅ Fulfilled promise in ${value}ms`,
        color: 'green',
        position: 'topCenter',
      })
    )
    .catch(error =>
      iziToast.show({
        title: 'Hey',
        message: `❌ Rejected promise in ${error}ms`,
        color: 'red',
        position: 'topCenter',
      })
    );
}
