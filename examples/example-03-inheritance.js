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

class MathOperations {
	static sum(a, b) {
		return a + b;
	}
}

console.log(MathOperations.sum(5, 8));

let myDog = new Dog('Sheitan', 4);
myDog.song();
