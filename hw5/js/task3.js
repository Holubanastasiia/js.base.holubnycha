// 3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия.Каждый элемент масива — объект,
//     содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
// Реализовать заполнение массива пользователем.По окончанию заполнения — вывести информацию о сотрудниках.

var staff = [
    cooperator1 = {
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
    },
    cooperator2 = {
        name: a = prompt("Введите имя сотрудника"),
        sName: b = prompt("Введите фамилию сотрудника"),
        age: c = prompt("Введите вoзраст сотрудника"),
        occupation: d = prompt("Введите должность сотрудника"),
        show: function () {
            console.log("Имя сотрудника2: " + this.name);
            console.log("Фамилия сотрудника2: " + this.sName);
            console.log("Возраст сотрудника2: " + this.age);
            console.log("Должность сотрудника2: " + this.occupation);
        }
    },
    cooperator3 = {
        name: a = prompt("Введите имя сотрудника"),
        sName: b = prompt("Введите фамилию сотрудника"),
        age: c = prompt("Введите вoзраст сотрудника"),
        occupation: d = prompt("Введите должность сотрудника"),
        show: function () {
            console.log("Имя сотрудника3: " + this.name);
            console.log("Фамилия сотрудника3: " + this.sName);
            console.log("Возраст сотрудника3: " + this.age);
            console.log("Должность сотрудника3: " + this.occupation);
        }
    }
]

for (var i = 0; i < staff.length; i++) {
    staff[i].show();
}

// 4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов - сотрудников, и каждому из объектов
// будет добавлять новое свойство "salary", хранящее зарплату сотрудника.
// Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
// • "director" — 3000;
// • "manager" — 1500;
// • "programmer" — 2000;
// • для остальных значений — 1000.
// После выполнения функции — вывести информацию о сотрудниках.

function assignSalary() {
    if (occupation == "director") {
        console.log()

    }

}