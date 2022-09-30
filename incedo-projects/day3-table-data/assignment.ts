class Customer {
    private name: string;
    private id: number;
    
    /**getID(): number{
        return this.id;
    }
    getName(): string{
        return this.name;
    }
    */
    createCustomer(name: string, id: number): void {
        this.name = name;
        this.id = id;
    }
    updateCustomer(id: number): void {
        this.id = id;
    }
    deleteCustomer(id: number): void {
        this.id = id;
    }

    listCustomer(): void {
        console.log("Name: " + this.name + " \nid: " + this.id);
    }

}

let customers: Customer []=[];
let first = new Customer();
let second = new Customer();
let third = new Customer();
first.createCustomer("Glenn",1);
second.createCustomer("Neptune",2)
third.createCustomer("Sam",3)
customers.push(first);
customers.push(second);
customers.push(third);

for (var c of customers) {
    console.log(c);
}

let option: number =1;

switch(option) {
    case 1: 
        let newCustomer = new Customer();
        newCustomer.createCustomer("justin",4)
        customers.splice(1,0,newCustomer);
        break;
    
    case 2:

        break;
    
    case 3: 
        customers.splice(0,1);
        break;
    
    case 4: 
        for (var c of customers) {
            console.log(c.listCustomer());
        }
        break;
    
    default:
        console.log("Option not available")
        break;
}
for (var c of customers) {
    console.log(c);
}
option =3;
switch(option) {
    case 1: 
        let newCustomer = new Customer();
        newCustomer.createCustomer("justin",4)
        customers.splice(1,0,newCustomer);
        break;
    
    case 2:

        break;
    
    case 3: 
        customers.splice(0,1);
        break;
    
    case 4: 
        for (var c of customers) {
            console.log(c.listCustomer());
        }
        break;
    
    default:
        console.log("Option not available")
        break;
}
for (var c of customers) {
    console.log(c);
}