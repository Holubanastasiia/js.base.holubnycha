// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, в каком квадранте в декартовой системе координат находится данная точка.Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.


var a = +prompt("Ведите точку координат х ");
var b = +prompt("Ведите точку координат у ");;
var point = {
    x: a,
    y: b
};

var GetQuadrant = function (x, y) {
    if (point.x > 0 && point.y > 0) {
        console.log("Point in the first quadrant");
    }
    else if (point.x > 0 && point.y < 0) {
        console.log("Point in the second quadrant");
    }
    else if (point.x < 0 && point.y < 0) {
        console.log("Point in the third quadrant");
    }
    else if (point.x < 0 && point.y > 0) {
        console.log("Point in the fourth quadrant");
    }
    else if (point.x == 0 && point.y == 0) {
        console.log("This is origin");
    }
}
GetQuadrant();