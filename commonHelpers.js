import"./assets/styles-05972ba8.js";import{f as c,i as m}from"./assets/vendor-77e16229.js";const e={btnStartTimer:document.querySelector("button[data-start]"),btnStopTimer:document.querySelector("button[data-stop]"),fieldDays:document.querySelector("span[data-days]"),fieldHours:document.querySelector("span[data-hours]"),fieldMinutes:document.querySelector("span[data-minutes]"),fieldSeconds:document.querySelector("span[data-seconds]"),inputDate:document.querySelector("#datetime-picker"),greetText:document.querySelector(".greeting-text")};let i=0,f=Date.now(),a=0;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){i=Number(t[0]);let n=i-f;console.log(n),n<=0?(m.warning({title:"Caution",message:"Please choose a date in the future",color:"red",position:"topCenter"}),e.btnStartTimer.disabled=!0):e.btnStartTimer.disabled=!1}};c("input#datetime-picker",b);e.btnStartTimer.addEventListener("click",T);e.btnStopTimer.addEventListener("click",S);function S(){clearInterval(a);const t=o(0);e.fieldDays.textContent=t,e.fieldHours.textContent=t,e.fieldMinutes.textContent=t,e.fieldSeconds.textContent=t,e.btnStartTimer.disabled=!1,e.inputDate.disabled=!1,e.btnStopTimer.disabled=!0,e.greetText.textContent="Let's try it!😎"}function T(){a=setInterval(p,1e3),e.btnStartTimer.disabled=!0,e.inputDate.disabled=!0,e.btnStopTimer.disabled=!1,e.greetText.textContent="Good job!👍"}function p(){let t=Date.now(),n=i-t;if(n<=0){e.btnStartTimer.disabled=!1,e.inputDate.disabled=!1,e.btnStopTimer.disabled=!0,e.greetText.textContent="Let's try it!😎";return}let r=y(n);e.fieldDays.textContent=o(r.days),e.fieldHours.textContent=o(r.hours),e.fieldMinutes.textContent=o(r.minutes),e.fieldSeconds.textContent=o(r.seconds)}function y(t){const d=Math.floor(t/864e5),s=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:s,minutes:u,seconds:l}}function o(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
