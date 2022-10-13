import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'star';
  name:string = 'incedo';
  clickMessage:string='Morning';
  currentDate = new Date();
}
