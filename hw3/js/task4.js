//  4. Создать два произвольных массива: 
//         один массив - любимая спортивная команда / модели автомобилей / города, 
//         во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
//     Из двух массивов сделайте ассоциативный массив.
//     Массив, который будет выступать в качестве ключа - должен содержать уникальные значения

var cities = ["Kyiv", "Kharkiv", "Lviv"];
var population = [2.884, 1.419, 721.301];

var associativeArray = new Object();
for (var i = 0; i < 3 ; i++) {
  associativeArray[cities[i] ]= population[i];
}
console.log(associativeArray)