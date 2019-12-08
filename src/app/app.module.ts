import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EventComponent } from "./event/event.component";
import { UserComponent } from "./user/user.component";
import { ParticipantComponent } from "./participant/participant.component";
import { PotLoginComponent } from './pot-login/pot-login.component';
import { MyEventComponent } from './myevents/myevents.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    UserComponent,
    ParticipantComponent,
    PotLoginComponent,
    MyEventComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
