// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// 		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// 		Функция должна проверять корректность введенных чисел и знака операции.
// 		Все аргументы для функции принять от пользователя.
//  var operand1 = +prompt("Введите первое число: ");
// var sign = prompt("Введите знак арифметической операции: + - * /");
// var operand2 = +prompt("Введите второе число: ");
// var result; 
// if (result != undefined) {
//         document.write("Результат операции: " + result);
//     }

// function calculate(a, b, sign) {
//     if (isNaN(a) || isNaN(b)) {
//         document.write("Вы ввели некорректное число!");
//         return;
//     }
//     calculate(operand1, operand2, sign);

//     switch (sign) {
//         case "+": {
//             result = operand1 + operand2;
//             break;
//         }
//         case "-": {
//             result = operand1 - operand2;
//             break;
//         }
//         case "/": {
//             result = operand1 / operand2;
//             break;
//         }
//         case "*": {
//             result = operand1 * operand2;
//             break;
//         }
//         default: {
//             document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.</p>");
//             return;
//         }
//     }
    
// }

   function calculate(a, b, sign) {
            var result;
            if (isNaN(a) || isNaN(b) )
            {
                alert("One of arguments is not a number!");
                return;
            }
            switch (sign) {
                case "+" : {
                    result = a + b;
                    break;
                }
                case "-" : {
                    result = a - b;
                    break;
                }
                case "/" : {
                    result = a / b;
                    break;
                }
                case "*" : {
                    result = a * b;
                    break;
                }
                default: {
                     document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.</p>");
                    return;
                }
            }
            return result;
        }
var a = +prompt("Введите первое число: ");
var sign = prompt("Введите знак арифметической операции: + - * /");
var b = +prompt("Введите второе число: ");
var result = calculate(a, b, sign);
if (result != undefined) {
        document.write("Результат операции: " + result);
}