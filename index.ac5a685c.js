!function(){var t=fetch("https://api.thecatapi.com/v1/breeds").then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})),e={catsList:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),box:document.querySelector(".cat-info")};t.then((function(t){var n=t.map((function(t){return'<option value="'.concat(t.id,'">').concat(t.name,"</option>")})).join("");e.catsList.innerHTML=n,setTimeout((function(){e.loader.classList.toggle("is-hidden"),e.catsList.classList.toggle("is-hidden")}),500)})).catch((function(){e.loader.classList.toggle("is-hidden"),e.catsList.classList.toggle("is-hidden"),e.error.classList.toggle("is-hidden")})),e.catsList.addEventListener("change",(function(t){var n;(n=e.catsList.value,fetch("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(n,"&api_key=").concat("live_3rpw0p2bq7cyMRIB802NWTTKdq5z2oAXeA2uP0ym1T8snloQNk2eB9S9b7dAcMPA")).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))).then((function(t){console.log(t[0]);var n=t[0].breeds[0];e.box.innerHTML="\n            <div class='wrapper'>\n                <img width=500 src=\"".concat(t[0].url,'" alt="').concat(n.name,'">\n                <h2>').concat(n.name,'</h2>\n                <p class="cat-description">').concat(n.description,'</p>\n                <p class="cat-description">Temperament: ').concat(n.temperament,"</p>\n            </div>\n        ")}))}))}();
//# sourceMappingURL=index.ac5a685c.js.map
