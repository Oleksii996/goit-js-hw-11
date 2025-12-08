import{a as m,S as p,i as l}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="15998854-73128a3946d29211178091fd8",b="https://pixabay.com/api/";async function L(i){if(typeof i!="string")throw new TypeError("query must be a string");const o={key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return(await m.get(b,{params:o})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");c||console.warn("render-functions.js: не знайдено елемент з класом .gallery — створіть його в HTML");const w=new p(".gallery a",{captionsData:"alt",captionDelay:250});function S(i){if(!Array.isArray(i)||i.length===0)return;const o=i.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:a,comments:y,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li><b>Likes</b> ${t}</li>
            <li><b>Views</b> ${a}</li>
            <li><b>Comments</b> ${y}</li>
            <li><b>Downloads</b> ${d}</li>
          </ul>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),w.refresh()}function q(){c&&(c.innerHTML="")}function A(){u&&u.classList.add("is-loading")}function f(){u&&u.classList.remove("is-loading")}const s=document.querySelector(".form"),g=s?s.querySelector('input[name="search-text"]'):null;(!s||!g)&&console.warn("main.js: не знайдено форми або поля вводу. Переконайся у наявності .form та input[name='search-text'].");s==null||s.addEventListener("submit",P);async function P(i){i.preventDefault();const o=g.value.trim();if(!o){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}q(),A();try{const r=await L(o),n=Array.isArray(r==null?void 0:r.hits)?r.hits:[];if(n.length===0){l.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),f();return}S(n),l.success({title:"Found",message:`Found ${r.totalHits??n.length} images.`,position:"topRight",timeout:1500})}catch(r){console.error("Fetch error:",r),l.error({title:"Request failed",message:"Something went wrong while fetching images. Please try again later.",position:"topRight"})}finally{f()}}
//# sourceMappingURL=index.js.map
