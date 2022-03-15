// level 2

let arrey = [1, 3, 4, 6, 7, 8];

let data = arrey.filter(val => (val%2 !== 0));

console.log(data);



let str = 'Elie';
let string = str.replace(/([aeiou])/g, val => val.toUpperCase());

console.log(string);



let arry = [1, 3, 4, 6, 7, 8, 2, 5];

let max = arry.sort((a,b) => a-b);
let maxvalue = max[max.length - 1]

console.log(maxvalue);


