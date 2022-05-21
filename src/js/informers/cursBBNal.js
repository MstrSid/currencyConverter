export function cursBBNal(city = 'Минск') {
	let currArray = ['USD', 'EUR', 'RUB', 'PLN'];
	return getDataFromApi(city, currArray);
}

function getDataFromApi(city, currArray) { //with then chaining
	return fetch(`https://belarusbank.by/api/kursExchange?city=${city}`)
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
		.catch(e => e.message);
}