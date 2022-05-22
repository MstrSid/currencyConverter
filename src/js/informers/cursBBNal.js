export function cursBBNal(city = 'Минск') {
	let currArray = ['USD', 'EUR', 'RUB', 'PLN'];
	return getDataFromApi(city, currArray);
}

async function getDataFromApi(city, currArray) {
	try {
		const req = await fetch(`https://belarusbank.by/api/kursExchange?city=${city}`);
		const json = await req.json();
		const res = {};
		for (let key in json[0]) {
			currArray.forEach(item => {
				if (key === `${item}_in` || key === `${item}_out`) {
					res[key] = json[0][key];
				}
			});
		}
		return res;
	} catch (e) {
		return Promise.reject(e)
	}
}