function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const l={formPromis:document.querySelector("form"),inputFirstDelayMS:document.querySelector("delay"),inputDelayStepMS:document.querySelector("step"),inputAmount:document.querySelector("amount"),buttonCreat:document.querySelector("button")};let u=0;function a(e,t){const o=Math.random()>.3;return new Promise(((n,r)=>{setTimeout((()=>{o?n({position:e,delay:t}):r({position:e,delay:t})}),s.delay)}))}l.formPromis.addEventListener("input",(e=>{s[e.target.name]=Number(e.target.value)}));let d,s={};l.buttonCreat.addEventListener("click",(t=>{console.log(s.delay),d=Number(s.delay),t.preventDefault();for(let t=0;t<s.amount;t++)u+=1,a(u,d).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),d+=Number(s.step),s.delay+=Number(s.step);u=0,d=0}));
//# sourceMappingURL=03-promises.74594d93.js.map