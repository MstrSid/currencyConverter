export class BBCardsBuyInputs{

	render(){
		const div = document.createElement("div");
		div.classList.add("change-cards__buy");
		div.innerHTML += `
    <div class="change-cards__title">Беларусбанк по картам покупает</div>
    <div class="change-cards__item">
        <label for="bynInputIn">BYN: </label>
        <input type="text"
               id="bynInputIn"
               name="bynInputIn"
               value="0">
    </div> 
    <div class="change-cards__item">
        <label for="usdInputIn">USD: </label>
        <input type="text"
               id="usdInputIn"
               name="usdInputIn"
               value="0">
    </div>
    <div class="change-cards__item">
        <label for="eurInputIn">EUR: </label>
        <input type="text"
               id="eurInputIn"
               name="eurInputIn"
               value="0">
    </div>
    <div class="change-cards__item">
        <label for="rubInputIn">RUB: </label>
        <input type="text"
               id="rubInputIn"
               name="rubInputIn"
               value="0">
    </div>`;
		return div;
	}
}