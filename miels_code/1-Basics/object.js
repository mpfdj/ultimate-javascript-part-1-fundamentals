// Object literal (JSON)
let person = {
    name: 'Mosh',
    age: 30
}

console.log(person)

// Dot notation
person.name = 'John';
console.log(person.name);


// Bracket notation (supports variables)
person['name'] = 'Mary';
console.log(person['name']);

let selection = 'name';
console.log(person[selection]);
