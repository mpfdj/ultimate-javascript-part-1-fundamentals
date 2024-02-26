const person = {
    name: 'Mosh',
    age: 30
}


// for-in loop
// used to iterate over the properties of an object
for (let key in person)
    console.log(key, person[key])



const colors = ['red', 'blue', 'green'];

for (let index in colors)
    console.log(index, colors[index]);



// for-of loop
for (let color of colors)
    console.log(color)