import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EventComponent } from "./event/event.component";
import { UserComponent } from "./user/user.component";
import { ParticipantComponent } from "./participant/participant.component";
import { PotLoginComponent } from './pot-login/pot-login.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { NewEventComponent } from './new-event/new-event.component';
import { EventHomeComponent } from './event-home/event-home.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    UserComponent,
    ParticipantComponent,
    PotLoginComponent,
    EventDetailComponent,
    NewEventComponent,
    EventHomeComponent,
    CheckboxComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
