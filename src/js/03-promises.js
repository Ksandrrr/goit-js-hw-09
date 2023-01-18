import Notiflix from 'notiflix';
const refs = {
  formPromis: document.querySelector(`form`),
  inputFirstDelayMS: document.querySelector(`delay`),
  inputDelayStepMS: document.querySelector(`step`),
  inputAmount: document.querySelector(`amount`),
  buttonCreat: document.querySelector(`button`)
}
let position = 0;
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay.delay);
  });
}
let delay = {};
refs.formPromis.addEventListener(`input`, (e) => {
  delay[e.target.name] = Number(e.target.value)
});

refs.buttonCreat.addEventListener(`click`, (e) => {
  e.preventDefault()
  for (let index = 0; index < delay.amount; index++) {
    position += 1 
 createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay.step}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay.step}ms`);
      });
 delay.delay += delay.step
  }
  position = 0
   });

     
    