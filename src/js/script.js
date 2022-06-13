import {BBInformer} from "./informers/BBInformer";
import {BBCardsBuyInputs} from "./elements/BBCardsBuyInputs";
import {BBCardsSellInputs} from "./elements/BBCardsSellInputs";

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
	//const nalBB = new BBInformer(bbNalCurrencyArr, bbNalConversionArr,
	// "Минск");
	//const dataNal = nalBB.getNalCursFromApi();

	const radioGroup = document.querySelector("#typeChange");
	const sell = radioGroup.querySelector("#sell");
	const buy = radioGroup.querySelector("#buy");

	sell.addEventListener("click", () => {
		renderInputs("BB", "sell").catch(e => console.log(e));
	});

	buy.addEventListener("click", () => {
		renderInputs("BB", "buy").catch(e => console.log(e));
	});

	async function renderInputs(bank = "BB", type = "sell") {
		const sectionMain = document.querySelector(".change-cards");
		while (sectionMain.hasChildNodes()) {
			sectionMain.removeChild(sectionMain.lastChild);
		}
		let informer;
		if (bank === "BB" && type === "sell") {
			informer = new BBCardsSellInputs();
			sectionMain.append(informer.render());
			let dataCards = await cardBB.getCardCursFromApi();
			fillDataCardsSell(".change-cards__sell", 1, "eur", dataCards);
			addListenersInputs(dataCards, "sell");
		} else if (bank === "BB" && type === "buy") {
			informer = new BBCardsBuyInputs();
			sectionMain.append(informer.render());
			let dataCards = await cardBB.getCardCursFromApi();
			fillDataCardsBuy(".change-cards__buy", 1, "eur", dataCards);
			addListenersInputs(dataCards, "buy");
		}
	}

	function addListenersInputs(data, type) {
		switch (type) {
			case "buy": {
				const blockCardsBuy = document.querySelector(".change-cards__buy");
				blockCardsBuy.addEventListener("input", (e) => {
					let inputNum = e.target.value.replace(/[^0-9.]+/g, "").slice(0, 10);
					switch (true) {
						case e.target.id === "bynInputIn":
							fillDataCardsBuy(".change-cards__buy", inputNum, "byn", data);
							break;
						case e.target.id === "eurInputIn":
							fillDataCardsBuy(".change-cards__buy", inputNum, "eur", data);
							break;
						case e.target.id === "usdInputIn":
							fillDataCardsBuy(".change-cards__buy", inputNum, "usd", data);
							break;
						case e.target.id === "rubInputIn":
							fillDataCardsBuy(".change-cards__buy", inputNum, "rub", data);
							break;
					}
					e.target.value = inputNum;
				});
				break;
			}
			case "sell": {
				const blockCardsSell = document.querySelector(".change-cards__sell");
				blockCardsSell.addEventListener("input", (e) => {
					let inputNum = e.target.value.replace(/[^0-9.]+/g, "").slice(0, 10);
					switch (true) {
						case e.target.id === "bynInputOut":
							fillDataCardsSell(".change-cards__sell", inputNum, "byn", data);
							break;
						case e.target.id === "eurInputOut":
							fillDataCardsSell(".change-cards__sell", inputNum, "eur", data);
							break;
						case e.target.id === "usdInputOut":
							fillDataCardsSell(".change-cards__sell", inputNum, "usd", data);
							break;
						case e.target.id === "rubInputOut":
							fillDataCardsSell(".change-cards__sell", inputNum, "rub", data);
							break;
					}
					e.target.value = inputNum;
				});
			}
		}
	}

	function fillDataCardsBuy(parentClass, num = 1, currency = "usd", data) {
		const inputs = document.querySelector(parentClass).querySelectorAll("input");
		let bynIn;
		switch (currency) {
			case "usd":
				bynIn = +data.USDCARD_in * num;
				break;
			case "eur":
				bynIn = +data.EURCARD_in * num;
				break;
			case "rub":
				bynIn = +data.RUBCARD_in / 100 * num;
				break;
			case "byn":
				bynIn = num;
				break;
		}
		let usdIn = Number(bynIn / +data.USDCARD_in).toFixed(4);
		let eurIn = Number(bynIn / +data.EURCARD_in).toFixed(4);
		let rubIn = Number(bynIn / +data.RUBCARD_in * 100).toFixed(4);
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

	function fillDataCardsSell(parentClass, num = 1, currency = "usd", data) {
		const inputs = document.querySelector(parentClass).querySelectorAll("input");
		let bynOut;
		switch (currency) {
			case "usd":
				bynOut = +data.USDCARD_out * num;
				break;
			case "eur":
				bynOut = +data.EURCARD_out * num;
				break;
			case "rub":
				bynOut = +data.RUBCARD_out / 100 * num;
				break;
			case "byn":
				bynOut = num;
				break;
		}
		let usdOut = Number(bynOut / +data.USDCARD_out).toFixed(4);
		let eurOut = Number(bynOut / +data.EURCARD_out).toFixed(4);
		let rubOut = Number(bynOut / +data.RUBCARD_out * 100).toFixed(4);
		bynOut = Number(bynOut).toFixed(4);
		inputs.forEach(item => {
			switch (item.id) {
				case "bynInputOut":
					item.value = bynOut;
					break;
				case "eurInputOut":
					item.value = eurOut;
					break;
				case "usdInputOut":
					item.value = usdOut;
					break;
				case "rubInputOut":
					item.value = rubOut;
					break;
			}
		});

	}
});


