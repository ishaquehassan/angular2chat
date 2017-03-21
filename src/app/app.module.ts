import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RoutingModule } from './app-routing.module';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ChatListComponent } from './left-panels/chat-list/chat-list.component';
import { EditProfileComponent } from './left-panels/edit-profile/edit-profile.component';
import { WelcomeComponent } from './main-panels/welcome/welcome.component';
import { ChatComponent } from './main-panels/chat/chat.component';
import { MainChatComponent } from './main-chat/main-chat.component';



@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    EditProfileComponent,
    WelcomeComponent,
    ChatComponent,
    MainChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
