import{S as f,i as a}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="43258004-167cb59a45a78bad01bc517c7",h="https://pixabay.com/api/?";function m(i){const t=new URLSearchParams({key:p,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}${t}`).then(o=>{if(!o.ok)throw new Error("Failed to fetch");return o.json()})}const g=new f(".card-item a",{captionsData:"alt",captionDelay:250});function y(i,t){if(!t.hits.length){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const o=L(t.hits);i.insertAdjacentHTML("beforeend",o),g.refresh()}function L(i){return i.map(({webformatURL:t,largeImageURL:o,tags:s,likes:e,views:r,comments:n,downloads:d})=>`<li class="card-item">
  <a href=${o}
    ><img src=${t} alt="${s}" height="300"/>
    <ul class="card-info">
      <li>
        Likes
        <p>${e}</p>
      </li>
      <li>
        Views
        <p>${r}</p>
      </li>
      <li>
        Comments
        <p>${n}</p>
      </li>
      <li>
        Downloads
        <p>${d}</p>
      </li>
    </ul></a
  >
</li>`).join("")}const S=document.querySelector(".search-form"),c=document.querySelector(".search-input"),l=document.querySelector(".card-list"),b=document.querySelector(".loader");S.addEventListener("submit",P);function P(i){i.preventDefault();const t=c.value.trim();if(!t){a.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}l.innerHTML="",u(),m(t).then(o=>{y(l,o),c.value=""}).catch(o=>{a.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error("Fetch error:",o)}).finally(()=>{u()})}function u(){b.classList.toggle("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
