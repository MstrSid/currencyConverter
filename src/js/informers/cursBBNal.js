export function cursBBNal(city = 'Минск') {
	let currArray = ['USD', 'EUR', 'RUB', 'PLN'];
	return getDataFromApi(city, currArray);
}

async function getDataFromApi(city, currArray) {
	return await fetch(`https://belarusbank.by/api/kursExchange?city=${city}`)
		.then(result => result.json())
		.then(data => {
			const res = {};
			for (let key in data[0]) {
				currArray.forEach(item => {
					if (key === `${item}_in` || key === `${item}_out`) {
						res[key] = data[0][key];
					}
				});
			}
			return res;
		})
		.catch(e => e.toString());
}