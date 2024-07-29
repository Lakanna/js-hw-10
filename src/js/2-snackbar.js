import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const elements = {
  form: document.querySelector('.js-form'),
  btnSubmit: document.querySelector('button'),
};

console.dir(elements.form);

elements.form.addEventListener('click', handlerFormClick);
elements.form.addEventListener('submit', handlerSubmit);

function handlerSubmit(evn) {
  evn.preventDefault;
  console.log(evn.target);
}

function handlerFormClick(evn) {
  console.log('click', evn.target);
}
