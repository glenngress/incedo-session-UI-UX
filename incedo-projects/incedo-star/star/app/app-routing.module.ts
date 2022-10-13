import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RequestAccessComponent } from './components/request-access/request-access.component';
import { AddComponent } from './add/add.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: UserAdminComponent },
  { path: 'request', component: RequestAccessComponent },
  { path:  'add', component: AddComponent},
  { path: 'home', component: HomeComponent, 
  children: [
    { path: 'admin', component: UserAdminComponent },
    { path: 'dashboard', component: DashboardComponent}
  ]},
  { path: 'dashboard', component: DashboardComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
