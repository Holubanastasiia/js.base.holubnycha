
// 5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
// Параметр для сортировки принимается от пользователя.
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


var criteria = prompt("Введите критерий сортировки (name, sName, age, occupation, salary)");
console.log(criteria);
staff.sort(function (a, b) {
    switch (criteria) {
        case "name":
            if (a["name"] > b["name"]) {
                return 1;
            }
            else if (a["name"] < b["name"]) {
                return -1;
            } else {
                return 0;
            }
        case "sName":
            if (a["sName"] > b["sName"]) {
                return 1;
            }
            else if (a["sName"] < b["sName"]) {

                return -1;
            } else {
                return 0;
            }
        case "age":
            return a["age"] - b["age"];
        case "occupation":
            if (a["occupation"] > b["occupation"]) {
                return 1;
            }
            else if (a["occupation"] < b["occupation"]) {

                return -1;
            } else {
                return 0;
            }
        case "salary":
            return a["salary"] - b["salary"];
        default:
            console.log("None");
    }
})

for (var i = 0; i < staff.length; i++) {
    console.log("Имя: " + staff[i].name);
    console.log("Фамилия: " + staff[i].sName);
    console.log("Возраст: " + staff[i].age);
    console.log("Должность: " + staff[i].occupation);
    console.log("Зарплата: " + staff[i].salary);
}

