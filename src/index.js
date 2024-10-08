const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
};

function decode(expr) {
	const letterArr = expr.match(/.{10}/g);

	const binaryInMorse = letterArr.map(item => {
		let res = '';
		let symbolArr = item.match(/.{2}/g);

		symbolArr.forEach(a => {
			if (a == '00') {
				res += '';
			}
			if (a == '10') {
				res += '.';
			}
			if (a == '11') {
				res += '-';
			}
		})

		return item = res;
	});

	const result = binaryInMorse.map((item) => {
		if (item === '') {
			return ' ';
		} else {
			return MORSE_TABLE[item];
		}
	}).join('');
	return result;
}

module.exports = {
	decode
}