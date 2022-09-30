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
//this ng module contains four important sections: declaration import providers bootstrap
@NgModule({
  declarations: [ //here we need to register component directive pipe

    
    AppComponent, MyNewComponentComponent, TestPipePipe, SecondComponentComponent
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
