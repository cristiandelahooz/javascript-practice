#!/usr/bin/env node

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data loaded'), 2000); // Se resuelve después de 2 segundos
  });
}

async function main() {
  console.log('Fetching data...');
  const data = await fetchData(); // Espera 2 segundos a que fetchData se resuelva
  console.log(data); // Esto no se ejecuta hasta que la promesa se resuelva
  console.log('This runs after data is fetched');
}

main();
