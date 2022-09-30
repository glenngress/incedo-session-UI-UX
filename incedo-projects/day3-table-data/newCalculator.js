var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasicCal = /** @class */ (function () {
    function BasicCal(x, y) {
        this.x = x;
        this.y = y;
        console.log("Calculator started");
    }
    BasicCal.prototype.add = function (x, y) {
        return (x + y);
    };
    BasicCal.prototype.subtract = function (x, y) {
        return (x - y);
    };
    BasicCal.prototype.multiply = function (x, y) {
        return (x * y);
    };
    BasicCal.prototype.divide = function (x, y) {
    };
    return BasicCal;
}());
BasicCal.prototype.divide = function (x, y) {
    return (x / y);
};
var SciCal = /** @class */ (function (_super) {
    __extends(SciCal, _super);
    function SciCal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SciCal.prototype.sqrt = function (x) {
        return Math.sqrt(x);
    };
    SciCal.prototype.log = function (x) {
        return Math.log(x);
    };
    SciCal.prototype.sin = function (x) {
        return Math.sin(x);
    };
    SciCal.prototype.cos = function (x) {
        return Math.cos(x);
    };
    SciCal.prototype.tan = function (x) {
        return Math.tan(x);
    };
    return SciCal;
}(BasicCal));
//let b = new BasicCal(9, 1);
var s = new SciCal(9, 1);
console.log("add method -->" + s.add(9, 1));
console.log("subtract method -->" + s.subtract(9, 1));
console.log("multiply method -->" + s.multiply(9, 1));
console.log("divide method -->" + s.divide(9, 1));
console.log("Square root method -->" + s.sqrt(9));
console.log("log method -->" + s.log(10));
console.log("sin method -->" + s.sin(10));
console.log("cos method -->" + s.cos(10));
console.log("tan method -->" + s.tan(10));
