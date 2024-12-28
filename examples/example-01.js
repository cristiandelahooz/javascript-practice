console.time('execution time:');

export class Person {
	#bankAccount;
	constructor(name, lastname, age, bankAccount) {
		this.name = name;
		this.lastname = lastname;
		this.age = age;
		this.#bankAccount = bankAccount;
		this.money = 0;
		this.method = () => {
			console.log('this is from the method');
		};
	}
	/**
	 * @param {any} bankAccount
	 */
	set bankAccount(bankAccount) {
		this.#bankAccount = bankAccount;
	}
	insert(money) {
		this.money += money;
	}
}

// let person = {
//   name: 'cristian',
//   lastName: 'de la hoz',
//   age: 19,
//   method: () => {
//       console.log('this is from the method')
//     }
// }

let person = new Person('cristian', 'de la hoz', 19, 'r0q8fj0fj0q');
person.insert(3500);
/**
 * @description this is an example about objects and how to use a for in.
 */

for (const key in person) {
	if (Object.prototype.hasOwnProperty.call(person, key)) {
		const element = person[key];
		console.log(key + ':' + element);
	}
}

// person.method();

/**
 * @description destructuring objects
 */

let { name, age } = person;
console.log(age);

/**
 * @description spreading objects
 */

let anotherPerson = { ...person, email: 'cristiandelahooz@gmail.com' };

console.table(anotherPerson);
console.timeEnd('execution time:');
