import {cursBBNal} from "./informers/cursBBNal";
import {cursBBCards} from "./informers/cursBBCards";

window.addEventListener("DOMContentLoaded", () => {
	cursBBNal('Бобруйск').then(data => console.log(data));
	cursBBCards().then(data => console.log(data));

	const sectionMain = document.querySelector(".main");
	const div = document.createElement("div");
	div.classList.add("changeCards");
	cursBBCards().then(data => {
		div.innerHTML += `<div>
<div class="changeCards__item">USD банк покупает: ${data.USDCARD_in} BYN</div>
<div class="changeCards__item">EUR банк покупает: ${data.EURCARD_in} BYN</div>
<div class="changeCards__item">RUB банк покупает: ${data.RUBCARD_in} BYN</div>
</div>
<div>
<div class="changeCards__item">USD банк продает: ${data.USDCARD_out} BYN</div>
<div class="changeCards__item">EUR банк продает: ${data.EURCARD_out} BYN</div>
<div class="changeCards__item">RUB банк продает: ${data.RUBCARD_out} BYN</div>
</div>`;
		sectionMain.append(div);
	}).catch(e => console.log(e.message));
});

