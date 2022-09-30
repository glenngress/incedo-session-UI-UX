class BasicCal {
    private x:number;
    private y:number;

    constructor(x, y) {
        this.x = x;
        this.y = y;

        console.log("Calculator started")
    }

    public add(x:number, y:number): number {
        return (x + y);
    }

    public subtract(x:number, y:number): number{
        return (x - y);
    }

    public multiply(x:number, y:number): number {
        return (x * y);
    }
    public divide(x:number, y:number) {
    }

}

BasicCal.prototype.divide = function (x, y) {

    return (x / y);
}

class SciCal extends BasicCal {

    public sqrt(x:number):number {

        return Math.sqrt(x);
    }
    public log(x:number):number {

        return Math.log(x)
    }
    public sin(x:number):number {

        return Math.sin(x);
    }
    public cos(x:number):number {
        return Math.cos(x);
    }
    public tan(x:number):number {
        return Math.tan(x);
    }

}

//let b = new BasicCal(9, 1);
let s = new SciCal(9,1);
console.log("add method -->" + s.add(9, 1));
console.log("subtract method -->" + s.subtract(9, 1));
console.log("multiply method -->" + s.multiply(9, 1));
console.log("divide method -->" + s.divide(9, 1));
console.log("Square root method -->" + s.sqrt(9));
console.log("log method -->" + s.log(10));
console.log("sin method -->" + s.sin(10));
console.log("cos method -->" + s.cos(10));
console.log("tan method -->" + s.tan(10));