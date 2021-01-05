// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// Проверить числа на корректность

var number = +prompt("Введите число.");
var degree = +prompt("Введите в какую степень Вы хотите возвести число.");

function test(a, b) {
    var result = 1;
    if (isNaN(a) || isNaN(b)) {
        console.log("Вы ввели некорректное число или степень!");
    }
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(test(number, degree))

