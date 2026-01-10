// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const form = evt.target;
  const delay = Number(form.delay.value);
  const state = form.state.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(state === 'fulfilled'){
            resolve(delay);
        }else{
            reject(delay);
        }
    }, delay);
  });

  promise.then((delay) => {
    iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
  }).catch((delay) => {
    iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
  })

  form.reset();
}