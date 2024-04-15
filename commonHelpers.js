import{a as S,S as b,i as h}from"./assets/vendor-06b1bbdf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const w="43258004-167cb59a45a78bad01bc517c7",E="https://pixabay.com/api/";async function p(t,e){const i={key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:e};try{const s=await S.get(E,{params:i});if(s.status!==200)throw new Error("Failed to fetch");return s.data}catch{throw new Error("Failed to fetch")}}const q=new b(".card-item a",{captionsData:"alt",captionDelay:250});function m(t,e){if(!e.hits.length){h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const i=v(e.hits);t.insertAdjacentHTML("beforeend",i),q.refresh()}function v(t){return t.map(({webformatURL:e,largeImageURL:i,tags:s,likes:r,views:o,comments:n,downloads:L})=>`<li class="card-item">
  <a href=${i}
    ><img src=${e} alt="${s}" height="300"/>
    <ul class="card-info">
      <li>
        Likes
        <p>${r}</p>
      </li>
      <li>
        Views
        <p>${o}</p>
      </li>
      <li>
        Comments
        <p>${n}</p>
      </li>
      <li>
        Downloads
        <p>${L}</p>
      </li>
    </ul></a
  >
</li>`).join("")}const P=document.querySelector(".search-form"),f=document.querySelector(".search-input"),a=document.querySelector(".card-list"),l=document.querySelector(".load-more-btn"),M=document.querySelector(".loader");let u=1,c="";P.addEventListener("submit",F);l.addEventListener("click",R);async function F(t){if(t.preventDefault(),c=f.value.trim(),!c){h.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}u=1,a.innerHTML="",d();try{const e=await p(c,u);m(a,e),g(e.hits.length),f.value=""}catch(e){y(e)}finally{d()}}async function R(t){t.preventDefault(),u++,d();try{const e=await p(c,u);m(a,e),g(e.hits.length),O(e),$()}catch(e){y(e)}finally{d()}}function $(){const t=a.querySelector(".card-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}function d(){M.classList.toggle("is-hidden")}function g(t){t>0?l.classList.remove("is-hidden"):l.classList.add("is-hidden")}function y(t){h.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"}),console.error("Fetch error:",t)}function O(t){const e=t.totalHits||0,i=a.querySelectorAll(".card-item").length;e<=i&&(l.classList.add("is-hidden"),h.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}
//# sourceMappingURL=commonHelpers.js.map
