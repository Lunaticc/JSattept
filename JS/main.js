// // https://www.youtube.com/watch?v=hdI2bqOjy3c&t=157s
// // var apparently not in use, let, const
// // Data Types //
// // String, Numbers, Boolean, Null, Undefined, Symbol

// const constants = 'Tech, Comp, It, Code';
// const name = 'David';
// const age = 26;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined; //Explicitly defined undefined
// let z;

// console.log(typeof x);
// // Concatenation
// console.log('mu name is ' + name + ' and I am ' + age + ' years old!');
// //Template String
// console.log(`my name is ${name} and fuck off`);

// console.log(name.length);
// console.log(constants.split(', '));

// //Arrays - Multiple hold variables

// const numbers = new Array(1,2,3,4,5,6,7,8,9,0);

// const fruits = ['apple', 'oranges', 'banana', 10, true];
// console.log(numbers);
// console.log(fruits);
// fruits[3] = 'greenbeans';
// console.log(fruits[0], fruits[2]);

// fruits.unshift('Strawberry');
// fruits.push('mangos');
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// Object variables

const person = {
    firstname: 'David',
    lastName: 'Thiman',
    age: 26,
    hobbies: ['programming', 'learning', 'outside activites'],
    address: {
        street: 'rymdgatan',
        city: 'borlänge',
        state: 'Dalarna'
    }
}


console.log(person.age, person.lastName, person.address.state);
console.log(`My name is ${person.firstname} and I live in ${person.address.city}, by myself, but I love my girldfriend!`)
person.firstname = 'Harald';
console.log(`My username on Du.se is ${person.firstname.substring(0, 3)}${person.lastName.substring(0, 2)}`);



console.log(person.firstname);

