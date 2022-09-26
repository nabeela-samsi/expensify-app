//object destructuring
// const person ={
//     name: 'Nabeela',
//     age: 25,
//     location: {
//         city: 'Espoo',
//         temp:11
//     }
// };

// // const name = person.name;
// // const age = person.age;
// const {name:firstname = 'Anonymous', age} = person; //the above lines will take more space so this is optimized one

// console.log(`${firstname} is ${age}`);
// // console.log(`${person.name} is ${person.age}.`);

// const{city, temp:temparature} = person.location;
// // if(person.location.city && person.location.temp) {
// //     console.log(`It's ${person.location.temp} in ${person.location.city}`);
// // }
// if(city && temparature) {
//     console.log(`It's ${temparature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'penguin'
//     }
// }

// const {name:publisherName = 'self-published'} = book.publisher
// console.log(publisherName)

//array destructuring
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylvania', '19147'];
// const address = []
console.log(`You are in ${address[1]} ${address[2]}.`)

//in array destructing if we dont need all then no need to create variables for them, the first array we dont need so we left comma, then added the required variables and left which were not in use
const [, , state = 'New York'] = address;
console.log(`You are in ${state}.`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medium] = item;
console.log(`A medium ${itemName} costs ${medium}`);