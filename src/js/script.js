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

window.addEventListener("DOMContentLoaded", async () => {
	const cardBB = new BBInformer(bbCardCurrencyArr, bbCardConversionArr);
	const nalBB = new BBInformer(bbNalCurrencyArr, bbNalConversionArr, "Минск");
	const dataCards = await cardBB.getCardCursFromApi();
	const dataNal = await nalBB.getNalCursFromApi();

	async function renderInputs() {
		const sectionMain = document.querySelector(".main");
		const div = document.createElement("div");
		div.classList.add("changeCardsBuy");
		div.innerHTML += `<div>
    <div>Беларусбанк по картам покупает</div>
    <div class="changeCards__item">
        <label for="bynInputIn">BYN: </label>
        <input type="text"
               id="bynInputIn"
               name="bynInputIn"
               value="0">
    </div> 
    <div class="changeCards__item">
        <label for="usdInputIn">USD: </label>
        <input type="text"
               id="usdInputIn"
               name="usdInputIn"
               value="0">
    </div>
    <div class="changeCards__item">
        <label for="eurInputIn">EUR: </label>
        <input type="text"
               id="eurInputIn"
               name="eurInputIn"
               value="0">
    </div>
    <div class="changeCards__item">
        <label for="rubInputIn">RUB: </label>
        <input type="text"
               id="rubInputIn"
               name="rubInputIn"
               value="0">
    </div>
</div>`;
		sectionMain.append(div);
		fillDataCardsBuy(".changeCardsBuy", 1, "eur");
		addListeners();
	}

	function addListeners() {
		const blockCardsBuy = document.querySelector(".changeCardsBuy");
		blockCardsBuy.addEventListener("input", (e) => {
			let inputNum = e.target.value.replace(/[^0-9.]+/g, "");
			switch (true) {
				case e.target.id === "bynInputIn":
					fillDataCardsBuy(".changeCardsBuy", inputNum, "byn");
					break;
				case e.target.id === "eurInputIn":
					fillDataCardsBuy(".changeCardsBuy", inputNum, "eur");
					break;
				case e.target.id === "usdInputIn":
					fillDataCardsBuy(".changeCardsBuy", inputNum, "usd");
					break;
				case e.target.id === "rubInputIn":
					fillDataCardsBuy(".changeCardsBuy", inputNum, "rub");
					break;
			}
			e.target.value = inputNum;
		})
	}

	function fillDataCardsBuy(parentClass, num = 1, currency = "usd") {
		const inputs = document.querySelector(parentClass).querySelectorAll("input");
		let bynIn;
		switch (currency) {
			case "usd":
				bynIn = +dataCards.USDCARD_in * num;
				break;
			case "eur":
				bynIn = +dataCards.EURCARD_in * num;
				break;
			case "rub":
				bynIn = +dataCards.RUBCARD_in/100 * num;
				break;
			case "byn":
				bynIn = num;
				break;
		}
		let usdIn = Number(bynIn / +dataCards.USDCARD_in).toFixed(4);
		let eurIn = Number(bynIn / +dataCards.EURCARD_in).toFixed(4);
		let rubIn = Number(bynIn / +dataCards.RUBCARD_in * 100).toFixed(4);
		bynIn = Number(bynIn).toFixed(4);
		inputs.forEach(item => {
			switch (item.id) {
				case "bynInputIn":
					item.value = bynIn;
					break;
				case "eurInputIn":
					item.value = eurIn;
					break;
				case "usdInputIn":
					item.value = usdIn;
					break;
				case "rubInputIn":
					item.value = rubIn;
					break;
			}
		});

	}

	async function fillDataNal() {
		let res;
		let initialBYN = 1;
		let usdIn = Number(initialBYN / +dataNal.USD_in).toFixed(4);
		let usdOut = Number(initialBYN / +dataNal.USD_out).toFixed(4);
		let eurIn = Number(initialBYN / +dataNal.EUR_in).toFixed(4);
		let rubIn = Number((initialBYN / +dataNal.RUB_in) * 100).toFixed(4);
		let eurOut = Number(initialBYN / +dataNal.EUR_out).toFixed(4);
		let rubOut = Number((initialBYN / +dataNal.RUB_out) * 100).toFixed(4);
		res = {
			bynIn: initialBYN,
			bynOut: initialBYN,
			usdOut: usdOut,
			usdIn: usdIn,
			eurIn: eurIn,
			rubIn: rubIn,
			eurOut: eurOut,
			rubOut: rubOut,
		};
		console.log(res);
		return res;
	}

	//cardBB.getCardConversionFromApi().then(data => console.log(data));
	renderInputs().catch(e => e.message);

});


