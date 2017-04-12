import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppBase} from "../../app-base";
import {Http, Headers} from "@angular/http";

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent extends AppBase implements OnInit {


  constructor(private router: Router,public http: Http) {
    super(http)
    this.makeServerLogin()

  }


  makeServerLogin(){
    var loginParams = "email=ngtest1@example.com&pass=123456789&request=1";
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    var data = {
      email : "ngtest1@example.com",
      pass : "123456789",
      request : 1
    };

    this.http.post('http://192.168.100.6:81/refer_local_backup/login/login_register',data,headers)
      .map(res => res.text())
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => this.getData()
      );
  }

  getData(){
    this.http.get('http://192.168.100.6:81/refer_local_backup/main/ajaxDataHandler?convSno=0')
      .map(res => res.text())
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('Random Quote Complete')
      );
  }

  ngOnInit() {
  }



}
