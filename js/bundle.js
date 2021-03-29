!function(){"use strict";function e(e,t){document.querySelector(e).style.display="block",document.body.style.overflow="hidden",t&&clearInterval(t)}function t(e){document.querySelector(e).style.display="none",document.body.style.overflow=""}function n(e){return e>=0&&e<10?`0${e}`:e}document.addEventListener("DOMContentLoaded",(()=>{const o=setTimeout((()=>e(".modal",o)),5e3);(function(e,t,n,o){const r=document.querySelectorAll(e),s=document.querySelectorAll(t),a=document.querySelector(n);function c(){s.forEach((e=>{e.style.display="none"})),r.forEach((e=>{e.classList.remove(o)}))}function l(e=0){s[e].style.display="block",r[e].classList.add(o)}c(),l(),a.addEventListener("click",(e=>{const t=e.target;t&&t.classList.contains("tabheader__item")&&r.forEach(((e,n)=>{t==e&&(c(),l(n))}))}))})(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),function(n,o,r){const s=document.querySelectorAll(n),a=document.querySelector(o);s.forEach((t=>{t.addEventListener("click",(()=>e(o,r)))})),a.addEventListener("click",(e=>{e.target!==a&&""!=e.target.getAttribute("data-close")||t(o)})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&"block"===a.style.display&&t(o)})),window.addEventListener("scroll",(function t(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(e(o,r),window.removeEventListener("scroll",t))}))}("[data-model]",".modal",o),function(e,t){const o=document.querySelector(e),r=o.querySelector("#days"),s=o.querySelector("#hours"),a=o.querySelector("#minutes"),c=o.querySelector("#seconds"),l=setInterval(i,1e3);function i(){const e=function(e){const t=Date.parse(e)-Date.parse(new Date);return{total:t,days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/6e4%60),seconds:Math.floor(t/1e3%60)}}(t);r.innerHTML=n(e.days),s.innerHTML=n(e.hours),a.innerHTML=n(e.minutes),c.innerHTML=n(e.seconds),e.total<=0&&clearInterval(l)}i()}(".timer","2021-06-10"),function(){class e{constructor(e,t,n,o,r,s,...a){this.src=e,this.alt=t,this.title=n,this.descr=o,this.price=r,this.classes=a,this.parent=document.querySelector(s),this.transfer=68,this.changeToRub()}changeToRub(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?(this.classes="menu__item",e.classList.add(this.classes)):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n                    <img src=${this.src} alt=${this.alt}>\n                    <h3 class="menu__item-subtitle">${this.title}</h3>\n                    <div class="menu__item-descr">${this.descr}</div>\n                    <div class="menu__item-divider"></div>\n                    <div class="menu__item-price">\n                        <div class="menu__item-cost">Цена:</div>\n                        <div class="menu__item-total"><span>${this.price}</span> руб/день\n                        </div>\n                    </div>`,this.parent.append(e)}}(async function(e){let t=await fetch(e);if(!t.ok)throw new Error(`Couldnt fetch ${e}, status: ${t.status}`);return await t.json()})("http://localhost:3000/menu").then((t=>{t.forEach((({img:t,altimg:n,title:o,descr:r,price:s})=>{new e(t,n,o,r,s,".menu .container").render()}))}))}(),function(){const e=document.querySelector(".calculating__result span");let t,n,o,r,s;function a(){e.textContent=t&&s&&r&&n&&o?"woman"===t?Math.round((447.6+9.2*n+3.1*o-4.3*r)*s):Math.round((88.36+13.4*n+4.8*o-5.7*r)*s):"...."}function c(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-diet")===localStorage.getItem("diet")&&e.classList.add(t)}))}function l(e,n){const o=document.querySelectorAll(e);o.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-diet")?(s=+e.target.getAttribute("data-diet"),localStorage.setItem("diet",s)):(t=e.target.getAttribute("id"),localStorage.setItem("sex",t)),o.forEach((e=>{e.classList.remove(n)})),e.target.classList.add(n),a()}))}))}function i(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":o=+t.value;break;case"weight":n=+t.value;break;case"age":r=+t.value}a()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="woman",localStorage.setItem("sex",t)),localStorage.getItem("diet")?s=localStorage.getItem("diet"):(s=1.375,localStorage.setItem("diet",s)),a(),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),l("#gender div","calculating__choose-item_active"),l(".calculating__choose_big div","calculating__choose-item_active"),i("#height"),i("#weight"),i("#age")}(),function(n,o){function r(n){const r=document.querySelector(".modal__dialog");r.style.display="none",e(".modal",o);const s=document.createElement("div");s.classList.add("modal__dialog"),s.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${n}</div>\n            </div>`,document.querySelector(".modal").append(s),setTimeout((()=>{s.remove(),r.style.display="block",t(".modal")}),4e3)}document.querySelectorAll(n).forEach((e=>{var t;(t=e).addEventListener("submit",(e=>{e.preventDefault();const n=document.createElement("img");n.src="img/form/spinner.svg",n.style.cssText="\n                display: block;\n                margin: 0 auto;",t.insertAdjacentElement("afterend",n);const o=new FormData(t);(async(e,t)=>{let n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:t});return await n.json()})(0,JSON.stringify(Object.fromEntries(o.entries()))).then((e=>{console.log(e),r("Спасибо! Мы с вами свяжемся")})).catch((()=>{r("Что-то пошло не так...")})).finally((()=>{t.reset(),n.remove()}))}))}))}("form",o),function({container:e,slide:t,nextArrow:o,prevArrow:r,totalCounter:s,curentCounter:a,wrapper:c,field:l}){let i=0,d=1;const u=document.querySelectorAll(t),m=document.querySelector(e),h=document.querySelector(r),g=document.querySelector(o),f=document.querySelector(s),y=document.querySelector(a),p=document.querySelector(c),_=window.getComputedStyle(p).width,v=document.querySelector(l);u.length<10?(f.textContent=`0${u.length}`,y.textContent=`0${d}`):(f.textContent=u.length,y.textContent=d),v.style.width=100*u.length+"%",v.style.display="flex",v.style.transition="0.5s all",p.style.overflow="hidden",u.forEach((e=>e.style.width=_)),m.style.position="relative";const b=document.createElement("ol"),S=[];b.style.cssText="\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;",m.append(b);for(let e=0;e<u.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;",0==e&&(t.style.opacity=1),b.append(t),S.push(t)}function w(){S.forEach((e=>e.style.opacity=".5")),S[d-1].style.opacity=1}g.addEventListener("click",(()=>{i==+_.replace(/\D/g,"")*(u.length-1)?i=0:i+=+_.replace(/\D/g,""),v.style.transform=`translateX(-${i}px)`,d==u.length?d=1:d++,y.textContent=n(d),w()})),h.addEventListener("click",(()=>{0==i?i=+_.replace(/\D/g,"")*(u.length-1):i-=+_.replace(/\D/g,""),v.style.transform=`translateX(-${i}px)`,1==d?d=u.length:d--,y.textContent=n(d),w()})),S.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.getAttribute("data-slide-to");d=t,i=+_.replace(/\D/g,"")*(t-1),v.style.transform=`translateX(-${i}px)`,y.textContent=n(d),w()}))}))}({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",curentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})}))}();
//# sourceMappingURL=bundle.js.map