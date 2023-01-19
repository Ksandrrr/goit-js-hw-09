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
    }, delayObj.delay);
  });
}
refs.formPromis.addEventListener(`input`, (e) => {
  delayObj[e.target.name] = Number(e.target.value)
});

let delayObj = {};
let delay;
refs.buttonCreat.addEventListener(`click`, (e) => {
  console.log(delayObj.delay)
  delay = Number(delayObj.delay)
  e.preventDefault()
  for (let index = 0; index < delayObj.amount; index++) {
    
    position += 1 
    createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });  
    delay += Number(delayObj.step)
    delayObj.delay += Number(delayObj.step)
  
  }
  position = 0
  delay = 0
   });

     
    