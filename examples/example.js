import promptSync from 'prompt-sync';

let myFirtVariable = 'Hello World';
console.log(myFirtVariable);

for (let i = 0; i < 5; i++) {
	console.log(i);
}
console.info('End of the script');
switch (myFirtVariable) {
	case 'Hello World':
		console.log('first case');
		break;
	default:
		console.log('default case');
		break;
}

const prompt = promptSync();
const name = prompt('Enter your name: ');
console.log(`Hello, ${name}!`);
