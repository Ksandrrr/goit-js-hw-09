!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("6JpON"),u={formPromis:document.querySelector("form"),inputFirstDelayMS:document.querySelector("delay"),inputDelayStepMS:document.querySelector("step"),inputAmount:document.querySelector("amount"),buttonCreat:document.querySelector("button")},a=0;function c(e,t){var n=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){n?o({position:e,delay:t}):r({position:e,delay:t})}),t.delay)}))}var l={};u.formPromis.addEventListener("input",(function(e){l[e.target.name]=Number(e.target.value)})),u.buttonCreat.addEventListener("click",(function(t){t.preventDefault();for(var n=0;n<l.amount;n++)c(a+=1,l).then((function(t){var n=t.position,o=t.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o.step,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(i).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o.step,"ms"))})),l.delay+=l.step;a=0}))}();
//# sourceMappingURL=03-promises.03b29854.js.map
