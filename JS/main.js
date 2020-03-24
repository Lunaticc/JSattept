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

// Object variables //

// const person = {
//     firstname: 'David',
//     lastName: 'Thiman',
//     age: 26,
//     hobbies: ['programming', 'learning', 'outside activites'],
//     address: {
//         street: 'rymdgatan',
//         city: 'borlänge',
//         state: 'Dalarna'
//     }
// }


// console.log(person.age, person.lastName, person.address.state);
// console.log(`My name is ${person.firstname} and I live in ${person.address.city}, by myself, but I love my girldfriend!`)
// person.firstname = 'Harald';
// console.log(`My username on Du.se is ${person.firstname.substring(0, 3)}${person.lastName.substring(0, 2)}`);


// person.email = 'David@gmail.com';
// console.log(person);

// console.log(person.firstname);

// Todo object //

// const todos = [
//     {
//         id: 1,
//         Text: 'take out trash',
//         isComplete: true
//     },
//     {
//         id: 2,
//         Text: 'talk with boss',
//         isComplete: false
//     },
//     {
//         id: 3,
//         Text: 'Dentist appointment!',
//         isComplete: true
//     }
// ];

// console.log(todos[0].Text, todos[0].isComplete);


// JSON files //
//36:00 min

// const TodoJSON = JSON.stringify(todos);
// console.log(TodoJSON);

// FOR LOOPS //

// for(let i = 0; i < 10; i++){
//     console.log(`For loop number: ${i}`);
// }

// WHILE LOOPS //
// let i = 0;
// while(i < 10){
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// LOOP THROUGH ARRAYS! //

// for(let i = 0; i < todos.length; i++){
//     console.log(todos[i].Text);
// }
//  for(let todo of todos){
//       console.log(todo.Text);
//  }

 // FOREACH, MAP, FILTER //
 //FOREACH
//  todos.forEach(function(todo) {
//     console.log(todo.Text);
//  });

//  //MAP
//  const todoText = todos.map(function(todo) {
//     return todo.Text;
//  });
//  const todoIndex = todos.map(function(todoID) {
//     return todoID.id;
//  });

//  console.log(todoText);
//  console.log(todoIndex);

//  // FILTER 

//  const todoCompleted = todos.filter(function(todo) {
//     return todo.isComplete === true;
//  }).map(function(todo){
//      return todo.Text;
//  })

//  console.log(todoCompleted);


// CONDITIONALS //
 // === är för Data Types
 // == är för ett värde
 
 let cont = Math.floor(Math.random() * 10);
 let counter = 0;

 console.log(cont);

// const x = 10;
// if(x === 10){
//     alert('x is 10');
// } else{
//     console.log('x is NOT 10');
// }
function conte(p1, p2){
    return p1*p2;
}

console.log(conte(10, 34));

function counting (p3){
    return Math.floor(Math.random()*p3);
}

console.log(counting(100));