//  1. Сделать собственные примеры методов применяемых для массивов.

// 1 .push;
var names = [["Alex"], ["Sasha"], ["Nastya"], ["Ann"]];
names.push(["Oleg"]);
names[0] = ["Egor"];
console.log(names);

// 2 .pop;
// 3 .shift;
// 4 .unshift;
var myAge = [["Nastya", 27], ["Oleg", 32], ["Egor", 2.1]];
myAge.pop();
myAge.shift();
myAge.unshift(["Alex", 18]);
console.log(myAge);

// 4 .reverse;
var myAge = [["Nastya", 27], ["Oleg", 32], ["Egor", 2.1]];
myAge.reverse();
console.log(myAge);

// 5 .join;
var myData = [['2021'], ['12'], ['31']];
var newData = myData.join('/');
console.log(newData);

// 6 .sort;
var myAge = [["Nastya", 27], ["Oleg", 32], ["Egor", 2.1]];
myAge.sort();
console.log(myAge);

// 7 .concat;
var number1 = [1, 2, 3];
var number2 = [4, 5, 6];
var numbers = number1.concat(number2);
console.log(numbers);

// 8 .slice;
var names = ["Alex", "Sasha", "Nastya", "Ann", "oleg", "Egor"];
console.log(names.slice(2, 4));

// 9 .splice;
var names = ["Alex", "Sasha", "Nastya", "Ann", "oleg", "Egor"];
names.splice(3, 1);
console.log(names);






    


