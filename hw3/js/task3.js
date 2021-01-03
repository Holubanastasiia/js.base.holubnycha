//   3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. 
//     Размер каждого вложенного массива - 3.

var array = new Array();
array.length = +prompt("Введите число от 1 до 10");
console.log(array);

for (var i = 0; i < array.length; i++) {
    array[i] = new Array(3);

    if (array.length % 2 === 0) {
      array = ["Even"];  
    } else {
      array = ["Odd"];
    }
}
 console.log(array); 