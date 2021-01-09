// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.


var a = +prompt("Ведите точку координат х ");
var b = +prompt("Ведите точку координат у ");

var point = {
    x: a,
    y: b
};
function GetQuadrant(x, y) {
    if (point.x > 0 && point.y > 0) {
        console.log("Точка находится в первом квадранте");
    }
    else if (point.x > 0 && point.y < 0) {
        console.log("Точка находится во втором квадранте");
    }
    else if (point.x < 0 && point.y < 0) {
        console.log("Точка находится в третьем квадранте");
    }
    else if (point.x < 0 && point.y > 0) {
        console.log("Точка находится в четвертом квадранте");
    } else {
        console.log(null);
    }
}
GetQuadrant();