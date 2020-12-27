//  3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var number1, number2, number3;

number1 = +prompt("Введите первое число");
number2 = +prompt("Введите второе число");
number3 = +prompt("Введите третье число");

if (number1 > number2 && number1 > number3) {
    document.write(number1);
} else if (number2 > number3 && number2 > number1) {
    document.write(number2);
} else { 
    document.write(number3);
}
    
