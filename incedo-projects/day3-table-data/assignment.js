var Customer = /** @class */ (function () {
    function Customer() {
    }
    /**getID(): number{
        return this.id;
    }
    getName(): string{
        return this.name;
    }
    */
    Customer.prototype.createCustomer = function (name, id) {
        this.name = name;
        this.id = id;
    };
    Customer.prototype.updateCustomer = function (id) {
        this.id = id;
    };
    Customer.prototype.deleteCustomer = function (id) {
        this.id = id;
    };
    Customer.prototype.listCustomer = function () {
        console.log("Name: " + this.name + " \nid: " + this.id);
    };
    return Customer;
}());
var customers = [];
var first = new Customer();
var second = new Customer();
var third = new Customer();
first.createCustomer("Glenn", 1);
second.createCustomer("Neptune", 2);
third.createCustomer("Sam", 3);
customers.push(first);
customers.push(second);
customers.push(third);
for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
    var c = customers_1[_i];
    console.log(c);
}
var option = 1;
switch (option) {
    case 1:
        var newCustomer = new Customer();
        newCustomer.createCustomer("justin", 4);
        customers.splice(1, 0, newCustomer);
        break;
    case 2:
        break;
    case 3:
        customers.splice(0, 1);
        break;
    case 4:
        for (var _a = 0, customers_2 = customers; _a < customers_2.length; _a++) {
            var c = customers_2[_a];
            console.log(c.listCustomer());
        }
        break;
    default:
        console.log("Option not available");
        break;
}
for (var _b = 0, customers_3 = customers; _b < customers_3.length; _b++) {
    var c = customers_3[_b];
    console.log(c);
}
option = 3;
switch (option) {
    case 1:
        var newCustomer = new Customer();
        newCustomer.createCustomer("justin", 4);
        customers.splice(1, 0, newCustomer);
        break;
    case 2:
        break;
    case 3:
        customers.splice(0, 1);
        break;
    case 4:
        for (var _c = 0, customers_4 = customers; _c < customers_4.length; _c++) {
            var c = customers_4[_c];
            console.log(c.listCustomer());
        }
        break;
    default:
        console.log("Option not available");
        break;
}
for (var _d = 0, customers_5 = customers; _d < customers_5.length; _d++) {
    var c = customers_5[_d];
    console.log(c.listCustomer());
}
