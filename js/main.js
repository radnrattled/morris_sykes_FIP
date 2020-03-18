(() => {

let infoButtons = document.querySelectorAll('.button')
  lightBox = document.querySelector(".lightbox")
  closeLightbox = lightBox.querySelector('.close')
  Desc = document.querySelector(".beer-info")

const beerData = [
["Info",`ABV: 51% IBU: 24 CAL: 150 AVAILABLE: Year Round`],
["Lager",`Peroni is the number one lager brand in Italy and has been for over one and a half centuries. This premium, clear, golden-yellow lager is the result of the dedication to brewing of generations of the most qualified braumeisters.`],
["Brewing", `Brewed using the finest spring barley malts and hops, its taste is slightly bitter. A refreshing smooth lager, Peroni is suitable for all occasions.`],
["Pairings",`Pizza, Ribs & Spicy Foods Pepperjack & Queso Lemon Shortbread`],
["Styles",`BEER FAMILY: Pilsners and Pale Lagers BEER STYLE: International Pale Lager ORIGIN: Roma, Italy`],
["Aromas",`The citrus aroma is subtle, yet captivating. During production, we use the highest quality hops (Saaz-Saaz and Hallertau Magnum) that give the beer its distinctive yet balanced aroma which is light on the palate.`],
["Maize",`The combination of Nostrano dell’Isola maize, the finest hops and two-row spring-planted barley is the secret to our unique crisp and refreshing taste. Our special maize gives the beer its distinct clarity and light, golden colour reminiscent of prosecco.`],
["Ingredients",`Italian Maize: A blend including Nostrano dell’Isola
Hops: Saaz-Saaz and Hallertau Magnum
Barley: Two-row spring barley
Water: Pure, ‘soft water’, with low carbonates`],
["PLACEHOLDER",'PLACEHOLDER'],
["PLACEHOLDER",'PLACEHOLDER'],
["PLACEHOLDER",'PLACEHOLDER'],
["PLACEHOLDER",'PLACEHOLDER'],
["PLACEHOLDER",'PLACEHOLDER'],
["PLACEHOLDER",'PLACEHOLDER'],
["PLACEHOLDER",'PLACEHOLDER'],
["PLACEHOLDER",'PLACEHOLDER'],

];

function showLightbox() {
  //pop open lightbox and show content
  //debugger
  lightBox.classList.add('show-lightbox');
  Desc.textContent = `${beerData[this.dataset.offset][1]}`;
}

function hideLightbox(){
  lightBox.classList.remove('show-lightbox');
}


infoButtons.forEach(button => button.addEventListener("click", showLightbox));
closeLightbox.addEventListener("click", hideLightbox)
})();
