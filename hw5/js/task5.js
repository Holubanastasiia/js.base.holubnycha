
// 5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
// Параметр для сортировки принимается от пользователя.
// После выполнения функции — вывести информацию о сотрудниках.

var staff = [];
let anotherStaff;
do {
    staff.push({
        name: a = prompt("Введите имя сотрудника"),
        sName: b = prompt("Введите фамилию сотрудника"),
        age: c = prompt("Введите вoзраст сотрудника"),
        occupation: d = prompt("Введите должность сотрудника"),
        show: function () {
            console.log("Имя сотрудника1: " + this.name);
            console.log("Фамилия сотрудника1: " + this.sName);
            console.log("Возраст сотрудника1: " + this.age);
            console.log("Должность сотрудника1: " + this.occupation);
        }
    }
    )
    console.log(staff);
    anotherStaff = confirm("Ввести данные для еще одного сотрудника?");
} while (anotherStaff)

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
assignSalary(staff);

var criteria = prompt("Введите критерий сортировки (name, sName, age, occupation, salary)");
console.log(criteria);
staff.sort(function (a, b) {
    switch (criteria) {
        case criteria == "name" || criteria == "sName" || criteria == "occupation":
            if (a > b) {
                return 1;

            }
            else if (a < b) {
                return -1;
            }
        case criteria == "age" || criteria == "salary":
            return a - b;
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

