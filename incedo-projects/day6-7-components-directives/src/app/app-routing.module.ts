import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponentComponent } from './component/contact-us-component/contact-us-component.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';//here we need to define all route rules
import { MyNewComponentComponent } from './component/my-new-component/my-new-component.component';
import { SecondComponentComponent } from './component/second-component/second-component.component';
import { AnalysisComponent } from './component/analysis/analysis.component';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';
const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component:  HomeComponentComponent },
{ path: 'customer', component: MyNewComponentComponent },
{ path: 'customerForm', component: CustomerFormComponent },
{ path: 'user', component: SecondComponentComponent },
{ path: 'analysis', component: AnalysisComponent },
{ path: 'contactus', component: ContactUsComponentComponent }];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
