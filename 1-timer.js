import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as h,i as d}from"./assets/vendor-Dov3POoy.js";let a;const s=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]");o.disabled=!0;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]>Date.now()?(a=e[0],o.disabled=!1):(d.show({title:"Error",message:"Please choose a date in the future!",color:"red",position:"topRight"}),o.disabled=!0)}};function f(e){const u=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:u,hours:c,minutes:l,seconds:m}}function r(e){return String(e).padStart(2,"0")}h(s,p);o.addEventListener("click",e=>{o.disabled=!0,s.disabled=!0;let n=a-Date.now();const i=setInterval(()=>{n=a-Date.now();let t=f(n);document.querySelector("span[data-days]").textContent=r(t.days),document.querySelector("span[data-hours]").textContent=r(t.hours),document.querySelector("span[data-minutes]").textContent=r(t.minutes),document.querySelector("span[data-seconds]").textContent=r(t.seconds)},1e3);setTimeout(()=>{clearInterval(i),s.disabled=!1,d.show({title:"Done",message:"Time's up!",color:"green",position:"topCenter"})},n)});
//# sourceMappingURL=1-timer.js.map
