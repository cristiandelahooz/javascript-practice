#!/usr/bin/env node

class Dog {
  constructor(name) {
    this.name = name;
  }
}

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data loaded'), 2000); // Se resuelve después de 2 segundos
  });
}

function main() {
  console.log('Fetching data...');
  console.log(fetchData());
  fetchData().then((data) => {
    console.log(data); // Esto se ejecuta después de 2 segundos
  });
  console.log('This runs immediately!'); // Esto se ejecuta inmediatamente
}

main();

console.log(new Dog('Hol'));
