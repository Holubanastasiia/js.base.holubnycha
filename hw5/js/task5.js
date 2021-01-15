
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
if (criteria === "name") {
    sortByName();
} else if (criteria === "sName") {
    sortBysName();
} else if (criteria === "age") {
    sortByAge();
} else if (criteria === "occupation") {
    sortByOccupation();
} else if (criteria === "salary") {
    sortBySalary();
} else {
    "Выберете только один из предложенных критериев (name, sName, age, occupation, salary)";
}


function sortStaff(staff) {
    for (var i = 0; i < staff.length; i++) {
        console.log("Имя: " + staff[i].name);
        console.log("Фамилия: " + staff[i].sName);
        console.log("Возраст: " + staff[i].age);
        console.log("Должность: " + staff[i].occupation);
        console.log("Зарплата: " + staff[i].salary);
    }
}

function sortByName() {
    staff.sort(function (a, b) {
        var nameA = a.name.toLowerCase();
        var nameB = b.name.toLowerCase();
        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    })
}

function sortBysName() {
    staff.sort(function (a, b) {
        var sNameA = a.sName.toLowerCase();
        var sNameB = b.sName.toLowerCase();
        if (sNameA < sNameB)
            return -1;
        if (sNameA > sNameB)
            return 1;
        return 0;
    })
}

function sortByAge() {
    staff.sort(function (a, b) {
        return a.age - b.age;
    })
}

function sortBySalary() {
    staff.sort(function (a, b) {
        return a.salary - b.salary;
    })
}

function sortByOccupation() {
    staff.sort(function (a, b) {
        var nameA = a.occupation.toLowerCase();
        var nameB = b.occupation.toLowerCase();
        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    })
}
for (var i = 0; i < staff.length; i++) {
    console.log("Имя: " + staff[i].name);
    console.log("Фамилия: " + staff[i].sName);
    console.log("Возраст: " + staff[i].age);
    console.log("Должность: " + staff[i].occupation);
    console.log("Зарплата: " + staff[i].salary);
}

