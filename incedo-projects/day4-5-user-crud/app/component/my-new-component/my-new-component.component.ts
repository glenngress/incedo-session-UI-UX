import { Component, OnInit } from '@angular/core';
import { Customer } from '../../model/customer';
import { MyServiceService } from 'src/app/service/my-service.service';
@Component({
  selector: 'app-my-new-component',
  templateUrl: './my-new-component.component.html',
  styleUrls: ['./my-new-component.component.css']
})
export class MyNewComponentComponent implements OnInit {
  custArray:Array<Customer> = new Array();
   indexToEdit:number =-1;
   getData:any[] = [];

  // define back model here 
  
     model = new Customer('',0);
  
  constructor(private _httpService:MyServiceService) { }

  ngOnInit(): void {
  }
  submitted = false;

  onSubmit() { 

    this.submitted = true;
     }

// write createCustomer event here 

 createCustomer(){

  	console.log("customer creation here-->");

  	// Add customer in Customer Array using push event.
     this.custArray.push(new Customer(this.model.name, this.model.age));
     console.log(JSON.stringify(this.custArray));

  }
  deleteCustomer(x:number){

  	console.log("customer deletion here-->");

  	// delete customer in Customer Array using push event.
     this.custArray.splice(x,1);
     console.log(JSON.stringify(this.custArray));

  }

  editCustomer(x:number){

  	console.log("customer deletion here-->");

  	// update customer in Customer Array using push event.
     this.model.name = this.custArray[x].name;
     this.model.age = this.custArray[x].age;
     this.indexToEdit = x;

  }
  confirmEditCustomer(){
   this.custArray[this.indexToEdit] =this.model;
   this.model = new Customer('',0)
  }
  getUserDetails(){

   this._httpService.getUser() 
 
         .subscribe((res : any[])=>{
               console.log(res);
             // this.logger.debug(res);
             this.getData = res;
 
     });
 }


}
