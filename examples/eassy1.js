/**
 * @param {String} s
 * @returns {number}
 */
const scoreOfString = (s) => {
	let sum = 0;
	for (let i = 0; i < s.length - 1; i++) {
		sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
	}

	return sum;
};

console.log(scoreOfString('hello'));
