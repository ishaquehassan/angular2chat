import { Component } from '@angular/core';
import { RoutingModule } from './app-routing.module';
import {AppBase} from "./app-base";
import {Router} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AppBase{
  constructor(private router: Router,public http: Http) {
    super(http)
  }
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
