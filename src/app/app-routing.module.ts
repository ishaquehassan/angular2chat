import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./main-panels/welcome/welcome.component";
import {MainChatComponent} from "./chat/main-chat.component";
import {ChatComponent} from "./main-panels/chat/chat.component";
import {ChatListComponent} from "./left-panels/chat-list/chat-list.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'chat'
  },
  {path: 'chat',pathMatch: 'full',component:MainChatComponent,
    children : [
      {path : "" , component: ChatListComponent , outlet : "leftPanel"},
      {path : "" , component: WelcomeComponent , outlet : "mainPanel"},
    ]
  },
  {path: 'chat/messages/:id',pathMatch: 'full',component:MainChatComponent,
    children : [
      {path : "" , component: ChatListComponent , outlet : "leftPanel"},
      {path : "" , component: ChatComponent , outlet : "mainPanel"},
    ]
  },
  {path: '404', redirectTo: 'chat'},
  {path: '**', redirectTo: 'chat'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {
}
