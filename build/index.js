(()=>{"use strict";function e(e){let t=0,n=0;for(let l=e.length-1;l>=0;l--)"1"===e.charAt(l)&&(t+=Math.pow(2,n)),n++;return t}let t=document.getElementById("answer"),n=document.getElementById("decimalInput"),l=document.getElementById("form"),r=document.getElementById("error");l.onsubmit=l=>{l.preventDefault();let o=!1;r.textContent="";for(let e=0;e<n.value.length;e++)0!=n.value.charAt(e)&&1!=n.value.charAt(e)&&(o=!0);0==o?(t.innerHTML=e(n.value),console.log(e(n.value))):r.textContent="Enter either 0 or 1"}})();