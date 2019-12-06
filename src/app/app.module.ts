import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EventComponent } from "./event/event.component";
import { UserComponent } from "./user/user.component";
import { ParticipantComponent } from "./participant/participant.component";

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    UserComponent,
    ParticipantComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
