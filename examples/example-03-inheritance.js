class Animal {
	constructor(nameAnimal) {
		this.nameAnimal = nameAnimal;
	}
	song() {
		console.log(`this is a song from ${this.nameAnimal}`);
	}
}

class Dog extends Animal {
	constructor(nameAnimal, age) {
		super(nameAnimal);
		this.age = age;
	}

	song() {
		super.song() + console.log(`${this.age}`);
	}
}

const MathOperations = (a, b) => {
	return a + b;
}

console.log(MathOperations(5, 8));

const myDog = new Dog('Sheitan', 4);
myDog.song();
