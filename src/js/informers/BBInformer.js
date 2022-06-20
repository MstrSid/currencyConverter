export class BBInformer {
	constructor(currencyArray, conversionArray, city="Минск") {
		this.currencyArray = currencyArray;
		this.conversionArray = conversionArray;
		this.city = city;
	}

	async getCardCursFromApi() {
		try {
			const req = await fetch(`https://cors-anywhere.herokuapp.com/https://belarusbank.by/api/kurs_cards`);
			if (req.ok) {
				const json = await req.json();
				const res = {};
				for (let key in json[0]) {
					this.currencyArray.forEach(item => {
						if (key === item) {
							res[key] = json[0][key];
						}
					});
				}
				return res;
			} else {
				throw new Error(`${req.status}`)
			}
		} catch (e) {
			return Promise.reject(e)
		}
	}

	async getCardConversionFromApi() {
		try {
			const req = await fetch(`https://belarusbank.by/api/kurs_cards`);
			if (req.ok) {
				const json = await req.json();
				const res = {};
				for (let key in json[0]) {
					this.conversionArray.forEach(item => {
						if (key === item) {
							res[key] = json[0][key];
						}
					});
				}
				return res;
			} else {
				throw new Error(`${req.status}`)
			}
		} catch (e) {
			return Promise.reject(e)
		}
	}

	async getNalCursFromApi() {
		try {
			const req = await fetch(`https://belarusbank.by/api/kursExchange?city=${this.city}`);
			if (req.ok) {
				const json = await req.json();
				const res = {};
				for (let key in json[0]) {
					this.currencyArray.forEach(item => {
						if (key === item) {
							res[key] = json[0][key];
						}
					});
				}
				return res;
			} else {
				throw new Error(`${req.status}`)
			}
		} catch (e) {
			return Promise.reject(e)
		}
	}

	async getNalConversionFromApi() {
		try {
			const req = await fetch(`https://belarusbank.by/api/kursExchange?city=${this.city}`);
			if (req.ok) {
				const json = await req.json();
				const res = {};
				for (let key in json[0]) {
					this.conversionArray.forEach(item => {
						if (key === item) {
							res[key] = json[0][key];
						}
					});
				}
				return res;
			} else {
				throw new Error(`${req.status}`)
			}
		} catch (e) {
			return Promise.reject(e)
		}
	}
}