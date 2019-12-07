import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PotLoginComponent } from './pot-login/pot-login.component';
import { UserComponent } from './user/user.component';
import { ParticipantComponent } from './participant/participant.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
  path: 'login', component: PotLoginComponent
}
,{
  path: 'user', component: UserComponent
},{
  path: "participants", component: ParticipantComponent
},{
  path: 'events', component: EventComponent
},
// { path: '', redirectTo: '/login',
// pathMatch: 'full'
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
