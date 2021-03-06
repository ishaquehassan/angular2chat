import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppBase} from "../../app-base";
import {Http} from "@angular/http";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent extends AppBase implements OnInit,OnDestroy {
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
