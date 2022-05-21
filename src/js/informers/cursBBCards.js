export function cursBBCards() {
	let currArray = ['USDCARD', 'EURCARD', 'RUBCARD'];
	return getDataFromApi(currArray);
}

async function getDataFromApi(currArray) {
	return await fetch(`https://belarusbank.by/api/kurs_cards`)
		.then(result => result.json())
		.then(data => {
			const res = {};
			for (let key in data[0]) {
				currArray.forEach(item => {
					if (key === `${item}_in` || key === `${item}_out` || key === `kurs_date_time`) {
						res[key] = data[0][key];
					}
				});
			}
			return res;
		})
		.catch(e => e.toString());
}