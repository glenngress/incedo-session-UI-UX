import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponentComponent } from './component/contact-us-component/contact-us-component.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';//here we need to define all route rules
import { MyNewComponentComponent } from './component/my-new-component/my-new-component.component';
import { SecondComponentComponent } from './component/second-component/second-component.component';
import { AnalysisComponent } from './component/analysis/analysis.component';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { SignUpPageComponent } from './component/sign-up-page/sign-up-page.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { OrderComponent } from './component/order/order.component';
import { PremiumOrderComponent } from './component/premium-order/premium-order.component';
import { NormalOrderComponent } from './component/normal-order/normal-order.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signUp', component: SignUpPageComponent, },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponentComponent },
      { path: 'home', component: HomeComponentComponent },
      { path: 'customer', component: MyNewComponentComponent },
      { path: 'user', component: SecondComponentComponent },
      { path: 'contactus', component: ContactUsComponentComponent },
      {
        path: 'order', component: OrderComponent,
        children: [
          { path: '', redirectTo: 'normalOrder', pathMatch: 'full' },
          { path: 'normalOrder', component: NormalOrderComponent },
          { path: 'premiumOrder', component: PremiumOrderComponent },
        ]
      },
      { path: 'customerform', component: CustomerFormComponent },
      { path: 'analysis', component: AnalysisComponent }
    ]
  },
  { path: '**',  component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
