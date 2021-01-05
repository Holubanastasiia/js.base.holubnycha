// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// 		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// 		Функция должна проверять корректность введенных чисел и знака операции.
// 		Все аргументы для функции принять от пользователя.
//  
   
function calculate(a, b, sign) {
        var result;
        if (isNaN(a) || isNaN(b) )
        {
            alert("Вы ввели некорректное число!");
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