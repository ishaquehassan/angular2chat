import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppBase} from "../app-base";
import {Http} from "@angular/http";


@Component({
  selector: 'app-main-chat',
  templateUrl: './main-chat.component.html',
  styleUrls: ['./main-chat.component.css']
})
export class MainChatComponent extends AppBase implements OnInit {
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute,public http: Http) {
    super(http)
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
