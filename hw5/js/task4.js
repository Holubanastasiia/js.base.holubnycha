// 4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов - сотрудников, и каждому из объектов
// будет добавлять новое свойство "salary", хранящее зарплату сотрудника.
// Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
// • "director" — 3000;
// • "manager" — 1500;
// • "programmer" — 2000;
// • для остальных значений — 1000.
// После выполнения функции — вывести информацию о сотрудниках.

var staff = [
    cooperator1 = {
        name: a = prompt("Введите имя сотрудника"),
        sName: b = prompt("Введите фамилию сотрудника"),
        age: c = prompt("Введите вoзраст сотрудника"),
        occupation: d = prompt("Введите должность сотрудника"),
    },
    cooperator2 = {
        name: a = prompt("Введите имя сотрудника"),
        sName: b = prompt("Введите фамилию сотрудника"),
        age: c = prompt("Введите вoзраст сотрудника"),
        occupation: d = prompt("Введите должность сотрудника"),
    },
    cooperator3 = {
        name: a = prompt("Введите имя сотрудника"),
        sName: b = prompt("Введите фамилию сотрудника"),
        age: c = prompt("Введите вoзраст сотрудника"),
        occupation: d = prompt("Введите должность сотрудника"),
    }
]

function assignSalary(staff) {
    for (var i = 0; i < staff.length; i++) {
        if (staff[i].occupation === "director") {
            console.log(staff[i].salary = 3000);
        }
        else if (staff[i].occupation === "manager") {
            console.log(staff[i].salary = 1500);
        }
        else if (staff[i].occupation === "programmer") {
            console.log(staff[i].salary = 2000);
        } else {
            console.log(staff[i].salary = 1000);
        }
    }
}
assignSalary(staff)

for (var i = 0; i < staff.length; i++) {
    console.log("Имя: " + staff[i].name);
    console.log("Фамилия: " + staff[i].sName);
    console.log("Возраст: " + staff[i].age);
    console.log("Должность: " + staff[i].occupation);
    console.log("Зарплата: " + staff[i].salary);
}

