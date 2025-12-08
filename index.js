import{a as u,S as f,i as m}from"./assets/vendor-CNqCr-V-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="15998854-73128a3946d29211178091fd8",y="https://pixabay.com/api/";async function p(n){const r={key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};return(await u.get(y,{params:r})).data}const g=document.querySelector(".gallery"),a=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(n){const r=n.map(({webformatURL:o,largeImageURL:i,tags:e,likes:t,views:s,comments:l,downloads:c})=>`
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
            <li><b>Comments</b> ${l}</li>
            <li><b>Downloads</b> ${c}</li>
          </ul>
        </li>
      `).join("");g.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){a&&a.classList.remove("is-loading")}const S=document.querySelector(".form"),q=document.querySelector('input[name="search-text"]');S.addEventListener("submit",A);async function A(n){n.preventDefault();const r=q.value.trim();try{const o=await p(r),i=Array.isArray(o==null?void 0:o.hits)?o.hits:[];if(i.length===0){m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i)}finally{L()}}
//# sourceMappingURL=index.js.map
