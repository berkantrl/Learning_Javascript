// date object

let d = new Date();
let birthday = new Date(2001,10,30);

// Set Methods

d.setFullYear(2023);
d.setMonth(5);
d.setDate(20);
d.setHours(11);
d.setMinutes(45);
d.setSeconds(20);



// Get Methods 

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getMinutes());
console.log(d.getSeconds());


console.log(d.getFullYear()-birthday.getFullYear());
console.log(d.getMonth()-birthday.getMonth());
console.log(d.getDate()-birthday.getDate());

console.log(d);
console.log(typeof d);



// Example

// Print the current date.

var date = new Date();
console.log(date);

// Show one day before 1.1.1990.

var date2 = new Date();
date2.setFullYear(1989);
date2.setDate(31);
date2.setMonth(12);
console.log(date2);

// Find the elapsed time between two dates.

console.log(date.getFullYear()-date2.getFullYear());
console.log(date.getMonth()-date2.getMonth());
console.log(date.getDate()-date2.getDate());


