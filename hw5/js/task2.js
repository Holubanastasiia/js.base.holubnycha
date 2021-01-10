// 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
// Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
// В зависимости от принятого знака операции, вызвать соответствующий метод.

var a = +prompt("Введите первое число: ");
var sign = prompt("Введите знак арифметической операции: + - * /");
var b = +prompt("Введите второе число: ");
if (isNaN(a) || isNaN(b)) {
    console.log("Вы ввели некорректное число!");
}
var calculator = {
    sum: function (a, b) {
        var result = a + b;
        console.log(result);
    },
    sub: function (a, b) {
        var result = a - b;
        console.log(result);
    },
    mul: function (a, b) {
        var result = a * b;
        console.log(result);
    },
    div: function (a, b) {
        var result = a / b;
        console.log(result);
    }
}

if (sign == "+") {
    calculator.sum(a, b);
} else if (sign == "-") {
    calculator.sub(a, b);
} else if (sign == "*") {
    calculator.mul(a, b);
} else if (sign == "/") {
    calculator.div(a, b);
}




