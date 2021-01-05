// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// Проверить числа на корректность


var number = +prompt("Введите число.");
var degree = +prompt("Введите в какую степень Вы хотите возвести число.");
var result = Math.pow(number, degree);
function test() {
    alert(result);
}
if (isNaN(number) || isNaN(degree)) {
    alert("Вы ввели некорректное число или степень!");
}
test()