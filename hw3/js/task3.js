//   3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. 
//     Размер каждого вложенного массива - 3.

var a = +prompt("Введите число от 1 до 10");
var b = new Array(a);

for (var i = 0; i < b.length; i++){
  b[i] = new Array(3);
      
  for (var j = 0; j < 3; j++){
    if (i % 2 == 0) { 
      b[i][j] = "Even"; 
    } else { 
      b[i][j] = "Odd"; 
  }  
  } 
} 
console.log(b);
