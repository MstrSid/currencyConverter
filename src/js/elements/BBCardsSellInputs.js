export class BBCardsSellInputs{

	render(){
		const div = document.createElement("div");
		div.classList.add("change-cards__sell");
		div.innerHTML += `
    <div class="change-cards__title">Беларусбанк по картам продает</div>
    <div class="change-cards__item">
        <label for="bynInputOut">BYN: </label>
        <input type="text"
               id="bynInputOut"
               name="bynInputOut"
               value="0">
    </div> 
    <div class="change-cards__item">
        <label for="usdInputOut">USD: </label>
        <input type="text"
               id="usdInputOut"
               name="usdInputOut"
               value="0">
    </div>
    <div class="change-cards__item">
        <label for="eurInputOut">EUR: </label>
        <input type="text"
               id="eurInputOut"
               name="eurInputOut"
               value="0">
    </div>
    <div class="change-cards__item">
        <label for="rubInputOut">RUB: </label>
        <input type="text"
               id="rubInputOut"
               name="rubInputOut"
               value="0">
    </div>`;
		return div;
	}
}