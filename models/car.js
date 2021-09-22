"use strict";
var Car = /** @class */ (function () {
    function Car(plate, color, brand) {
        this.wheels = new Array();
        this.plate = plate;
        this.color = color;
        this.brand = brand;
    }
    Car.prototype.addWheel = function (wheel) {
        this.wheels.push(wheel);
    };
    return Car;
}());
var CarValidate = /** @class */ (function () {
    function CarValidate(_car) {
        this.car = new Car("", "", "");
        this.car = _car;
    }
    CarValidate.prototype.checkplate = function () {
        var regex = /^[0-9]{4}-([B-D]|[F-H]|[J-N]|[P-T]|[V-Z]){3}$/g;
        var str = this.car.plate;
        var result;
        result = regex.exec(str) !== null;
        if (!result)
            return "-1";
        return "0";
    };
    return CarValidate;
}());
