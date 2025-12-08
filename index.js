import{a as y,S as g,i as l}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="15998854-73128a3946d29211178091fd8",m="https://pixabay.com/api/";async function h(i){if(typeof i!="string")throw new TypeError("query must be a string");const o={key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};return(await y.get(m,{params:o})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");c||console.warn("render-functions.js: не знайдено елемент з класом .gallery — створіть його в HTML");const b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){if(!Array.isArray(i)||i.length===0)return;const o=i.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:d})=>`
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
            <li><b>Views</b> ${s}</li>
            <li><b>Comments</b> ${f}</li>
            <li><b>Downloads</b> ${d}</li>
          </ul>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),b.refresh()}function w(){c&&(c.innerHTML="")}function S(){u&&u.classList.add("is-loading")}function q(){u&&u.classList.remove("is-loading")}const a=document.querySelector(".form"),A=a?a.querySelector('input[name="search-text"]'):null;a==null||a.addEventListener("submit",$);async function $(i){i.preventDefault();const o=A.value.trim();if(!o){l.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}w(),S();try{const r=await h(o),n=Array.isArray(r==null?void 0:r.hits)?r.hits:[];if(n.length===0){l.info({title:"No results",message:"Sorry, there are no images matching your search query.",position:"topRight"});return}L(n),l.success({title:"Found",message:`Found ${r.totalHits??n.length} images.`,position:"topRight"})}catch{l.error({title:"Request failed",message:"Something went wrong. Try again later.",position:"topRight"})}finally{q()}}
//# sourceMappingURL=index.js.map
