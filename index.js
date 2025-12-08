import{a as f,S as m,i as d}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="15998854-73128a3946d29211178091fd8",p="https://pixabay.com/api/";async function g(n){const o={key:y,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};return(await f.get(p,{params:o})).data}const l=document.querySelector(".gallery"),a=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const o=n.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:s,comments:c,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${e}"
              loading="lazy"
            />
          </a>
          <ul class="info">
            <li><b>Likes</b> ${r}</li>
            <li><b>Views</b> ${s}</li>
            <li><b>Comments</b> ${c}</li>
            <li><b>Downloads</b> ${u}</li>
          </ul>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){l&&(l.innerHTML="")}function S(){a&&a.classList.add("is-loading")}function q(){a&&a.classList.remove("is-loading")}const A=document.querySelector(".form"),P=document.querySelector('input[name="search-text"]');A.addEventListener("submit",$);function $(n){n.preventDefault();const o=P.value.trim();S(),L(),g(o).then(t=>{const i=Array.isArray(t==null?void 0:t.hits)?t.hits:[];if(i.length===0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i)}).catch(t=>console.log(t)),q()}
//# sourceMappingURL=index.js.map
