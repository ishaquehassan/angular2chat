import { Component } from '@angular/core';
import { RoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public users = [
    {
      id:1,
      email : "Other@user.net",
      msg : "Other@user.net",
      time : "10:37 PM",
      count : 20
    }
  ];
}
