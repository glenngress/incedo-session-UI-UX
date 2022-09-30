import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'incedoDemoApp';
  name:string = 'incedo';
  clickMessage:string='Morning';
  currentDate = new Date();

  onClickMe() {
  
   console.log('event fired !!--->');
   this.clickMessage = ' Training! is Active ';
    
  }
}
