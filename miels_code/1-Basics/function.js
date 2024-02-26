// Performs a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' +  lastName);
}

greet('John', 'Smith');
greet('Mary');

// Calculates a value
// Return type is not required
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number);
