'use strict';

const arr = [2,3,4];
const [x,y,z] = arr;  // Destructurig the array, means unpacking the array
console.log(x,y,z); 
console.log(arr); // it doesn't affects the original array
const weekDays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours1 = {
  [weekDays1[1]]: {
    open: 12,
    close: 22,
  },
  [weekDays1[2]]: {
    open: 11,
    close: 23,
  },
  [weekDays1[6]]: {
    open: 24, // Open 24 hours
    close: 0,
  },
};

const restaurant = {
  name1: 'classio italino',
  location : 'via angelo',
  categories: ['italian', 'pizzeria', 'vegetarian', 'organic'],
  startermenu: ['focaccia', 'muinchurian', 'panipuri', 'soup', 'bread'],
  mainmenu:['pizza', 'pasta', 'risotto'],

  // ES6 Enhance Object Literals
  openingHours1,

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 24, // Open 24 hours
      close: 0,
    },
  },

  order: function(starterindex, menuindex){   // Method can be wriiten as like this
    return [this.startermenu[starterindex], this.mainmenu[menuindex]];
  },

  orderDelevery({   // Method can be wriiten as like this also
    starterindex = 0, 
    menuindex = 1, 
    time = '20:00', 
    address}){
    console.log(`Order Recieved! ${this.startermenu[starterindex]} and ${this.mainmenu[menuindex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngrediants,...otherIngrediants){
  console.log(mainIngrediants);
  console.log(otherIngrediants);
  }
}

restaurant.orderDelevery({
  time: '22:30',
  address: 'sultanpur',
  menuindex: 2,
  starterindex: 1,
});

restaurant.orderDelevery({
  address: 'Amarnagar',
});

const [first,second] = restaurant.categories;
console.log(first, second); // gives first two array elements

const [first1,,third] = restaurant.categories; // for skipping element put empty hole
console.log(first1, third); // gives first and third array elements

let [main,,secondary] = restaurant.categories; 
console.log(main, secondary);

// --------------- switching variables ---------------

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary); // for swaping elemtns use temparory variable

[main, secondary] = [secondary, main];  // Destructuring array
console.log(main, secondary);

console.log(restaurant.order(2,0)); 

// Recieved variables from function
const [starter, mainfood] = restaurant.order(2,0);  // Destructuring array
console.log(starter, mainfood);

// Nested Destructuring - Access nested array elements
const nested = [2,3,[5,6]];
const [i,,[j,k]] = nested;
console.log(i,j,k);

//  Default Values
const [p = 1,n = 1,q = 1] = [2,3];
console.log(p,n,q);

const {name1, openingHours, categories} = restaurant;
console.log(name1, openingHours, categories);

// changing name of object properties
const {name1: PizzaZone, openingHours: hours, categories: tags} = restaurant;
console.log(PizzaZone, hours, tags);

//  Default Values
const {menu = [], startermenu = []} = restaurant;
console.log(menu, startermenu);

// Mutating Variables - changing the properties value
let a = 111;
let b = 999;
const obj = {a:2, b:3, c:6};
({a,b} = obj);    // for this operation, () is neccesary
console.log(a,b);

const {fri : {open, close}} = openingHours;
console.log(open, close);

const array = [7,8,9];
const newarray = [1,2,array[0], array[1], array[2]];
console.log(newarray);

const newarray1 = [1,2,...array]; // with spread operator
console.log(newarray1);
console.log(...newarray1);

const newarray2 = [1,2,array]; // without spread operator
console.log(newarray2);

const str = 'naman';
console.log(...str);

const newMenu = [...restaurant.mainmenu, 'sandwich'];
console.log(newMenu);

// copy array
const mainmenuCopy = [...restaurant.mainmenu];
console.log(mainmenuCopy);

// join 2 array
const menu1 = [...restaurant.startermenu,...restaurant.mainmenu];
console.log(menu1);

// Iterable : array, string but Not Objects
const str1 = 'naman';
console.log([...str1,'','a']);
// const obj = (`${...str}`);  // Error

// const ingredients = [prompt("ingredients 1...!"), prompt("ingredients 2...!"), prompt("ingredients 3...!")];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);  // This is better than above line code

// Objects
const newRestaurant = {foundedIn: 1998, ...restaurant, foundedBy: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant}; // Copy the Object
restaurantCopy.name1 = 'Mc Donalds';
console.log(restaurantCopy.name1);
console.log(restaurant.name1);

// 1) Destructuring

// SPREAD bcz on right side of =
const array2 = [1,2,...[3,4,5]];
console.log(...array2);
const [o,l,...others] = [1,2,3,4,5];
console.log(o,l,others);

// REST bcz on left side of =
const [pizza ,, risotto, ...others1] = [...restaurant.mainmenu, ...restaurant.startermenu]; // REST element must be the last element
console.log(pizza, risotto, others1);

// Objects
const {sat, ...weekDays} = restaurant.openingHours;
console.log(weekDays);

// 2) Functions

const add = function(...numbers){
  let sum = 0;
  for(let i=0; i<numbers.length;i++){
    sum += numbers[i];
  }
  console.log(sum);
}
add(2,3);
add(4,2,3,4,5);

const add1 = [2,3,4];
add(...add1);

restaurant.orderPizza('mushrooms', 'onion', 'chilli', 'olives');
restaurant.orderPizza('mushrooms');

// ------------ Short-Circuiting ------------

// --------------- OR Operation ---------------
console.log(3 || 'jonas');  // if any one truthy value in the way --> it return first truthy value and its called "Short-Circuiting"
console.log('' || 'jonas');
console.log(true || 0);
console.log(undefined || null); //  if all are falsy values --> it return last falsy value
console.log(undefined || 0 || '' || 'hellow' || true || null);

// restaurant.numguest = 90;
const guest1 = restaurant.numguest ? restaurant.numguest : 10;
console.log(guest1);

const guest2 = restaurant.numguest || 20;
console.log(guest2);

// --------------- AND Operation ---------------

console.log(0 && 'jonas');  // if any one falsy value in the way --> it return first falsy value
console.log(7 && 34 && 'jonas');  //  if all are truthy values --> it return last truthy value
console.log(7 && 'jonas' && null && 34 && 'naman');

if(restaurant.orderPizza){
  restaurant.orderPizza('mushrooms', 'onion', 'chilli');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onion', 'chilli');

restaurant.numguest = 0;
const guests = restaurant.numguest || 10;
console.log(guests);

//  Nullish values only includes --> null and undefined (it does not include 0 and '')
const guestsCorrect = restaurant.numguest ?? 10;  // Only in Nullish operator --> 0 and '' are truthy values (its works like OR operaiton)
console.log(guestsCorrect);

const rest1 = {
  name1: 'capri',
  numguest: 0,
}

const rest2 = {
  name1: 'La Piazza',
  owner: 'Giovanni Rossi',  
}

// ------------- OR assignment operator -------------
// rest1.numguest = rest1.numguest || 10;
// rest1.numguest ||= 10;  // use short hand operator
// rest2.numguest = rest2.numguest || 10; 
// rest2.numguest ||= 10; // use short hand operator

// ------------- Nullish assignment operator (null or undefind) -------------
rest1.numguest ??= 10;
rest2.numguest ??= 10;
console.log(rest1);
console.log(rest2);

// ------------- AND assignment operator -------------
rest1.owner &&= 'anonymous';  
rest2.owner &&= 'anonymous';
console.log(rest1);
console.log(rest2);

for(const item of menu1)  console.log(item);

for(const item1 of menu1.entries()){
  console.log(`${item1[0] + 1}: ${item1[1]}`);
}

for(const [i, el] of menu1.entries()){
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu1.entries()]);

// without optional chaining
if(restaurant.openingHours1 && restaurant.openingHours1.mon) console.log(restaurant.openingHours1.mon.open);      // not exist
if(restaurant.openingHours1 && restaurant.openingHours1.tue) console.log(restaurant.openingHours1.tue.open);      // exist

// with optional chaining
console.log(restaurant.openingHours1.mon?.open);
console.log(restaurant.openingHours1?.tue?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for(const day of weekDays1){
  const open = restaurant.openingHours1[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?. (2,0) ?? 'method does not exist'); 
console.log(restaurant.orderPizza?. (2,0) ?? 'method does not exist');  

// Arrays
const users = [{name: 'naman',  email: 'xyz@email.com'}];
console.log(users[0]?.name ?? 'user array is empty');

// Property Name
const properties = Object.keys(openingHours1);
console.log(properties);
let openSTR = `we are open on ${properties.length} days : `

for(const day of properties){
  openSTR += `${day}, `;
}
console.log(openSTR);

// Property Values
const value = Object.values(openingHours1);
console.log(value);

// Entire Object
const entry = Object.entries(openingHours1);
console.log(entry);

for(const [key, {open, close}] of entry){
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}


// SET --------- it removes duplicate elements inside it

const orderSET = new Set(['pizza', 'pasta', 'pizza', 'pizza', 'burger', 'bread', 'chips']);
console.log(orderSET);
console.log(new Set('naman'));
console.log(orderSET.size);
console.log(orderSET.has('pizza'));   // as like include keyword in array
console.log(orderSET.has('soup'));

orderSET.add('soup');
console.log(orderSET);

orderSET.delete('pasta');     // delete element
// orderSET.clear();    // clear whole set
console.log(orderSET);

for(const order of orderSET){
  console.log(order);
}

const staff = ['waiter', 'chef', 'waiter', 'chef', 'manager'];
const staffUnique = [...new Set(staff)];  // to add all the elements in array, we use spread operator with []
console.log(staffUnique);

console.log(new Set(['waiter', 'chef', 'waiter', 'chef', 'manager']).size);
console.log(new Set('naman').size);


// MAP ------------

const rest = new Map();
rest.set('name1', 'Mc Donalds');
rest.set(1, 'pizza');
rest.set(2, 'pasta');
rest.set('categories', ['pizza', 'pasta', 'pizza', 'pizza', 'burger', 'bread', 'chips']).set('open', 11).set('close', 23).set(true, 'we are open :)').set(false, 'we are not open :(');
console.log(rest);
console.log(rest.get('name1'));
console.log(rest.get('categories'));
console.log(rest.get('open'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
const array1 = [1, 2];
rest.set(array1, 'vanila');
rest.set(document.querySelector('h1', 'heading'));
console.log(rest);
// rest.clear();
console.log(rest.size);
console.log(rest.get(array1));


// STRING Operation

const airline = 'sky Airline';
const plane = 'A320';

console.log(plane[0]);
console.log('A320'[2]);

console.log(airline.indexOf('i'));
console.log(airline.lastIndexOf('i'));
console.log(airline.indexOf('Airline'));

// SLICE Method

console.log(airline.slice(4));    // slice method will extract from given position
console.log(airline.slice(4, 7));    // it will extract from 4 and print till 6th position - endvalue not included in string
console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));   // + 1 is included to remove the space

console.log(airline.slice(-2));
console.log(airline.slice(1, -2));

const checkMiddleSeat = function(seat){
  //  B and E are the middle seats
  const s = seat.slice(-1);
  const Disicion = (s === 'B' || s === 'E') ? 'Middle Seat 😢' : 'Not Middle Seat 😎';
  console.log(s, Disicion);
}

checkMiddleSeat('11B');
checkMiddleSeat('21C');
checkMiddleSeat('9E');
checkMiddleSeat('23H');
checkMiddleSeat('11E');

console.log(new String('naman'));
console.log(typeof new String('naman'));

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix Capitalization in Name
const myname = 'nAmaN';
const nameLower = myname.toLowerCase();
console.log(nameLower);
const fixed = nameLower[0].toUpperCase() + nameLower.slice(1);
console.log(fixed);

// Comparing emails
const email = 'hello@gmail.com';
const loginemail = ' Hello@gmail.COM\n';
console.log(email === loginemail);

const loweremail = loginemail.toLowerCase();
console.log(loweremail);
const trimmedemail = loweremail.trim();   // The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string
console.log(trimmedemail);

const NormalizeEmail = loginemail.toLowerCase().trim();   // removed intermediat variable
console.log(NormalizeEmail);
console.log(email === NormalizeEmail)

// Replace
const price = '233,34#';
const priceUS = price.replace('#', '$').replace(',', '.');
console.log(priceUS);

const announcement= 'all should come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door','gate'));   // replaceAll is not working
console.log(announcement.replace(/door/g,'gate'));   // regular expression, g tends for global - so it will change all door --> gate

// Booleans
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('sky'));
console.log(plane1.startsWith('A320'));
console.log(plane1.startsWith('Air'));
console.log(plane1.endsWith('neo'));
console.log(plane1.endsWith('ene'));

if(plane1.startsWith('Airbus') && plane1.endsWith('neo')){
  console.log('part of new Airbus family');
}else{
  console.log('Not a part of new Airbus family');
}

const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log('Not Allowed');
  }else{
    console.log('Allowed');
  }
}
checkBaggage('i have Knife and laptop')
checkBaggage('i have Foods and Books')
checkBaggage('i have Gun for Protection')

// Split and Join

const string = 'a+very+nice+string';
const name2 = 'jonny depp'
console.log(string.split('+'));
console.log(string.split(' '));

const [firstname, lastname] = 'jonny depp'.split(' ');
const newName = ['Mr.', firstname, lastname.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
  const names = name.split(' ');
  const upperName = [];

  for(const n of names){
    // const n1 = n[0].toUpperCase() + n.slice(1);  // first method to do that
    const n1 = n.replace(n[0], n[0].toUpperCase());   // second method to do that
    upperName.push(n1);
  }
  console.log(upperName.join(' '));
}
capitalizeName('jonny depp');
capitalizeName('billi smith');
capitalizeName('chrish hemsworth');

// Padding

const message = 'go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('naman'.padStart(25, '+'));
console.log(message.padStart(25, '+').padEnd(35, '-'));
console.log('naman'.padStart(25, '+').padEnd(35, '-'));

const creditCard = function(number){
  const str = String(number);
  const last = str.slice(-4);
  return last.padStart(str.length, 'X');
}
console.log(creditCard(2333332445664334));
console.log(creditCard('2343675582635263852'));

// Repeat

const message1 = 'bad weather, all flightsare delayed... ';
console.log(message1.repeat(5));

const planswaiting = function(n){
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}
planswaiting(5);
planswaiting(10);
planswaiting(15);

// Exercise

const flights =   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🚩  Delayed Departure from FAO to TXL ( 11h25)
//               Arrival from BRU to FAO ( 11h45)
//   🚩  Delayed Arrival from HEL to FAO ( 12h05)
//             Departure from FAO to LIS ( 12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for(const flight of flights.split('+')){
  const [type, from, to, time] = flight.split(';');
  const output = `${type.includes('Delayed') ? '🚩': ''} ${type.replaceAll('_',' ')} from ${getCode(from)} to ${getCode(to)} ( ${time.replace(':', 'h')})`;
  console.log(output.padStart(46));
}