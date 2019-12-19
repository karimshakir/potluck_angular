import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { PotluckService } from '../potluck.service';
import { Event } from '../models/event';
import { USERMOCK } from '../user-mock-data';
import { UserEvents } from '../models/userEvents';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
 usermock = USERMOCK;
  event: Event[];
  userEvent: UserEvents[]
  constructor(private potluckService: PotluckService) {}


  ngOnInit() {
    console.log("USER.TS", this.usermock)
    this.getEventsById(this.usermock)
  }

  getEventsById(usermock){
    this.potluckService.getEventsById(usermock)
    .subscribe(userEvents => {
      console.log("3:58", userEvents)
      this.userEvent = userEvents
    })
  }
}
