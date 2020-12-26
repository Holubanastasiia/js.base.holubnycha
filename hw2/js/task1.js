// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.

var number1, number2, number3, average; 

number1 = +prompt("Введите первое число");
number2 = +prompt("Введите второе число");
number3 = +prompt("Введите третье число");
average = (number1 + number2 + number3) / 3;

if (number1 === number2 || number1 === number3 || number2 === number3) {
    alert("Ошибка") ;
} else {
    alert("Среднее арифметическое = " + average) ; 
}