import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './component/my-new-component/my-new-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { TestPipePipe } from './pipe/test-pipe.pipe';
import { SecondComponentComponent } from './component/second-component/second-component.component';
import { HighlightDirectiveDirective } from './directive/highlight-directive.directive';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { ContactUsComponentComponent } from './component/contact-us-component/contact-us-component.component';
import { CustomerFormComponent } from './component/customer-form/customer-form.component';
import { AnalysisComponent } from './component/analysis/analysis.component';
import { SignUpPageComponent } from './component/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
//this ng module contains four important sections: declaration import providers bootstrap
@NgModule({
  declarations: [ //here we need to register component directive pipe

    
    AppComponent, MyNewComponentComponent, TestPipePipe, SecondComponentComponent, HighlightDirectiveDirective, HomeComponentComponent, ContactUsComponentComponent, CustomerFormComponent, AnalysisComponent, SignUpPageComponent, LoginPageComponent
  ],
  imports: [ // import internal and external modules
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [], // we need to inject the angular services here angular DI(dependency injection) bracket
  bootstrap: [AppComponent] // we need to mention the component which would be and entry point of the application
})
export class AppModule { }
