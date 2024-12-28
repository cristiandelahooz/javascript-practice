let person = {
    name: "cristian"
}

// console.log(person.name)
let set = new Set();
set.add(1)
set.add({name: "cristian"})
set.add(person)

set.forEach(element => {
    console.log(element)
});

/**
 * @description this is the implementation of a callback
 */

export function principal(callback){
    let animal = {
        name: "Sheitan",
        age: 4,
        raza: "Pitbull"
    }
    callback(animal)
}

principal((element) => {
    console.log(element)
});


/**
 * @description this is the implementation of IIFE(Immediately invoke function expression) 
 * It helps to create a local scope, avoiding global variable pollution, and enabling the use of closures
 */

(() => {
    let userName = "cristian";
    console.log(userName)
})();

// let userName = "robert"
// console.log(userName)