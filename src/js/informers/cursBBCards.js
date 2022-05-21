export function cursBBCards() {
	let currArray = ['USDCARD', 'EURCARD', 'RUBCARD'];
	return getDataFromApi(currArray);
}

async function getDataFromApi(currArray) { //with async await
	try {
		const req = await fetch(`https://belarusbank.by/api/kurs_cards`);
		const json = await req.json();
		const res = {};
		for (let key in json[0]) {
			currArray.forEach(item => {
				if (key === `${item}_in` || key === `${item}_out` || key === `kurs_date_time`) {
					res[key] = json[0][key];
				}
			});
		}
		return res;
	} catch (e) {
		console.log(e.message);
	}

}