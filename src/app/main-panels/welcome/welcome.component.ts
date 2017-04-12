import { Component, OnInit } from '@angular/core';
import {AppBase} from "../../app-base";
import {Http} from "@angular/http";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent extends AppBase implements OnInit {

  constructor(public http: Http) {
    super(http)
  }

  ngOnInit() {
  }

}
