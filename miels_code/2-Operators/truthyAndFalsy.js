// let userColor = 'red';
let userColor = undefined;


let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

// In this example we are using the power of the logical or operator with non-boolean values
// With this technique we can provide default values
