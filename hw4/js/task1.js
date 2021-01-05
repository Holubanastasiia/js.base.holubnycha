// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// 		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// 		Функция должна проверять корректность введенных чисел и знака операции.
// 		Все аргументы для функции принять от пользователя.
function calculate(a, b, sign) {

    if (isNaN(a) || isNaN(b)) {
        document.write("Вы ввели некорректное число!");
        return;
    }

    var operand1 = +prompt("Введите первое число: ");
    var sign = prompt("Введите знак арифметической операции: + - * /");
    var operand2 = +prompt("Введите второе число: ");
    var result;

    switch (sign) {
        case "+":
            result = add(operand1, operand2);
            break;
        case "-":
            result = sub(operand1, operand2);
            break;
        case "*":
            result = mul(operand1, operand2);
            break;
        case "/":
            result = div(operand1, operand2);
            break;
        default:
            document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.</p>");
    }
}
        if (result != undefined) {
            document.write("Результат операции: " + result);
        }