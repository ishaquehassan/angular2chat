import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {WelcomeComponent} from "./main-panels/welcome/welcome.component";
import {ChatListComponent} from "./left-panels/chat-list/chat-list.component";
import {EditProfileComponent} from "./left-panels/edit-profile/edit-profile.component";
import {ChatComponent} from "./main-panels/chat/chat.component";
import {MainChatComponent} from "./main-chat/main-chat.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full'
  },
  {path: 'app',pathMatch: 'full',component:MainChatComponent,
    children: [
      {path: '', component: ChatListComponent},
      {path: 'profile', component: EditProfileComponent},
      {path: 'messages', component: ChatComponent, outlet: 'main-panel'}
    ]
  },
  {path: 'welcome', component: WelcomeComponent, outlet: 'main-panel'},

  {path: '404', component: WelcomeComponent, outlet: 'main-panel'},
  {path: '**', redirectTo: '/app'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingModule {
}
