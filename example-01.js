/**
 * @description this is an example about objects and how to use a for in.
 */

let person = {
  name: 'cristian',
  lastName: 'de la hoz',
  age: 19,
  method: () => {
      console.log('this is from the method')
    }
}

for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(key + ':' + element);
    }
}

