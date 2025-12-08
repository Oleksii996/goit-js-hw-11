import{a as d,S as m,i as c}from"./assets/vendor-CNqCr-V-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="15998854-73128a3946d29211178091fd8",p="https://pixabay.com/api/";async function g(n){const r={key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};return(await d.get(p,{params:r})).data}const l=document.querySelector(".gallery"),a=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const r=n.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li><b>Likes</b> ${t}</li>
            <li><b>Views</b> ${s}</li>
            <li><b>Comments</b> ${u}</li>
            <li><b>Downloads</b> ${f}</li>
          </ul>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){l&&(l.innerHTML="")}function S(){a&&a.classList.add("is-loading")}function q(){a&&a.classList.remove("is-loading")}const A=document.querySelector(".form"),w=document.querySelector('input[name="search-text"]');A.addEventListener("submit",P);async function P(n){n.preventDefault();const r=w.value.trim();if(!r){c.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}L(),S();try{const o=await g(r),i=Array.isArray(o==null?void 0:o.hits)?o.hits:[];if(i.length===0){c.info({title:"No results",message:"Sorry, there are no images matching your search query.",position:"topRight"});return}b(i)}finally{q()}}
//# sourceMappingURL=index.js.map
