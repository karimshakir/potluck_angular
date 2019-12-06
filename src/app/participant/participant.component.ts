import { Participant } from "./../models/participant";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-participant",
  templateUrl: "./participant.component.html",
  styleUrls: ["./participant.component.css"]
})
export class ParticipantComponent implements OnInit {
  partipant1: Participant = {
    userId: 1,
    eventId: 1,
    dish: "dish1"
  };
  partipant2: Participant = {
    userId: 1,
    eventId: 2,
    dish: "dish2"
  };
  partipant3: Participant = {
    userId: 1,
    eventId: 3,
    dish: "dish3"
  };
  partipant4: Participant = {
    userId: 1,
    eventId: 4,
    dish: "dish4"
  };
  constructor() {}

  ngOnInit() {}
}
