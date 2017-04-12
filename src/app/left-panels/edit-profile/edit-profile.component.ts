import { Component, OnInit } from '@angular/core';
import {AppBase} from "../../app-base";
import {Http} from "@angular/http";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent extends AppBase implements OnInit {

  constructor(public http: Http) {
    super(http)
  }

  ngOnInit() {
  }

}
