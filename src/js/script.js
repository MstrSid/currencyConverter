import {BBInformer} from "./informers/BBInformer";

const bbCardCurrencyArr = ["USDCARD_in", "USDCARD_out", "EURCARD_in",
	"EURCARD_out",
	"RUBCARD_in", "RUBCARD_out"];
const bbCardConversionArr = ["USDCARD_EURCARD_in", "USDCARD_EURCARD_out",
	"USDCARD_RUBCARD_in", "USDCARD_RUBCARD_out", "RUBCARD_EURCARD_in",
	"RUBCARD_EURCARD_out"];

const bbNalCurrencyArr = ["USD_in", "USD_out", "EUR_in",
	"EUR_out",
	"RUB_in", "RUB_out"];

const bbNalConversionArr = ["USD_EUR_in", "USD_EUR_out",
	"USD_RUB_in", "USD_RUB_out", "RUB_EUR_in",
	"RUB_EUR_out"];

window.addEventListener("DOMContentLoaded", () => {
	const cardBB = new BBInformer(bbCardCurrencyArr, bbCardConversionArr);
	const nalBB = new BBInformer(bbNalCurrencyArr, bbNalConversionArr, "Минск");
	//nalBB.getNalCursFromApi().then(data => console.log(data));
	//nalBB.getNalConversionFromApi().then(data => console.log(data));
	//cardBB.getCardCursFromApi().then(data => console.log(data));

	cardBB.getCardCursFromApi().then(data => {
		let initialUSD = 1;
		let bynIn = +data.USDCARD_in;
		let bynOut = +data.USDCARD_out;
		let eurIn = Number(bynIn / +data.EURCARD_in).toFixed(4);
		let rubIn = Number((bynIn / +data.RUBCARD_in)*100).toFixed(4);
		let eurOut = Number(bynOut / +data.EURCARD_out).toFixed(4);
		let rubOut = Number((bynOut / +data.RUBCARD_out)*100).toFixed(4);
		console.log('Беларусбанк карты покупка:');
		console.log(`${initialUSD} USD`);
		console.log(`${eurIn} EUR`);
		console.log(`${rubIn} RUB`);
		console.log(`${bynIn} BYN`);
		console.log('Беларусбанк карты продажа:');
		console.log(`${initialUSD} USD`);
		console.log(`${eurOut} EUR`);
		console.log(`${rubOut} RUB`);
		console.log(`${bynOut} BYN`);
	});

	nalBB.getNalCursFromApi().then(async data => {
		let initialUSD = 1;
		let bynIn = +data.USD_in;
		let bynOut = +data.USD_out;
		let eurIn = Number(bynIn / +data.EUR_in).toFixed(4);
		let rubIn = Number((bynIn / +data.RUB_in)*100).toFixed(4);
		let eurOut = Number(bynOut / +data.EUR_out).toFixed(4);
		let rubOut = Number((bynOut / +data.RUB_out)*100).toFixed(4);
		console.log('Беларусбанк нал. покупка:');
		console.log(`${initialUSD} USD`);
		console.log(`${eurIn} EUR`);
		console.log(`${rubIn} RUB`);
		console.log(`${bynIn} BYN`);
		console.log('Беларусбанк нал. продажа:');
		console.log(`${initialUSD} USD`);
		console.log(`${eurOut} EUR`);
		console.log(`${rubOut} RUB`);
		console.log(`${bynOut} BYN`);
	});
	//cardBB.getCardConversionFromApi().then(data => console.log(data));

	const sectionMain = document.querySelector(".main");
	const div = document.createElement("div");
	div.classList.add("changeCards");
	cardBB.getCardCursFromApi().then(data => {
		div.innerHTML += `<div>
    <div>Беларусбанк по картам покупает</div>
    <div class="changeCards__item">
        <label for="usdInputIn">USD: </label>
        <input type="text"
               id="usdInputIn"
               name="usdInputIn"
               value="${data.USDCARD_in}">
    </div>
    <div class="changeCards__item">
        <label for="eurInputIn">EUR: </label>
        <input type="text"
               id="eurInputIn"
               name="eurInputIn"
               value="${data.EURCARD_in}">
    </div>
    <div class="changeCards__item">
        <label for="rubInputIn">RUB: </label>
        <input type="text"
               id="rubInputIn"
               name="rubInputIn"
               value="${data.RUBCARD_in}">
    </div>
</div>
<div>
    <div>Беларусбанк по картам продает</div>
    <div class="changeCards__item">
        <label for="usdInputOut">USD: </label>
        <input type="text"
               id="usdInputOut"
               name="usdInputOut"
               value="${data.USDCARD_out}">
    </div>
    <div class="changeCards__item">
        <label for="eurInputOut">EUR: </label>
        <input type="text"
               id="eurInputOut"
               name="eurInputOut"
               value="${data.EURCARD_out}">
    </div>
    <div class="changeCards__item">
        <label for="rubInputOut">RUB: </label>
        <input type="text"
               id="rubInputOut"
               name="rubInputOut"
               value="${data.RUBCARD_out}">
    </div>
</div>`;
		sectionMain.append(div);
	}).catch(e => console.log(e.message));
});

