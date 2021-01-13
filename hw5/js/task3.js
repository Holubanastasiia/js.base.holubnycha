// 3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия.Каждый элемент масива — объект,
//     содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
// Реализовать заполнение массива пользователем.По окончанию заполнения — вывести информацию о сотрудниках.

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
