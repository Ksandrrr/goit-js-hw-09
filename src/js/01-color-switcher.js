function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    bodyHTML: document.querySelector(`body`),
    listBTN: document.querySelector(`.list-btn`),
    start: document.querySelector(`[data-start]`),
    stop: document.querySelector(`[data-stop]`)
}



// Стили
refs.start.style.padding = `15px 35px 15px 35px`
refs.stop.style.padding = `15px 35px 15px 35px`
refs.stop.style.boxShadow = `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`
refs.start.style.boxShadow = `rgba(0, 0, 0, 0.35) 0px 5px 15px`
refs.start.style.border = `none`
refs.stop.style.border = `none`
refs.start.style.fontSize = `25px`
refs.stop.style.fontSize = `25px`


refs.start.addEventListener(`click`, start)
refs.stop.addEventListener(`click`, stop)
let timerId = null;
refs.stop.disabled = true;
function start() {
    refs.start.style.boxShadow = `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`
    refs.stop.style.boxShadow = `rgba(0, 0, 0, 0.35) 0px 5px 15px`
    refs.start.disabled = true;
    refs.stop.disabled = false;
    refs.bodyHTML.style.backgroundColor = `${getRandomHexColor()}`
    timerId = setInterval(() => {
       refs.bodyHTML.style.backgroundColor = `${getRandomHexColor()}`
    }, 1000);
}

function stop() {
    clearInterval(timerId);
    refs.stop.style.boxShadow = `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`
    refs.start.style.boxShadow = `rgba(0, 0, 0, 0.35) 0px 5px 15px`
    refs.start.disabled = false;
    refs.stop.disabled = true;

}
