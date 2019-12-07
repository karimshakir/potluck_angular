import { Participant } from "./../models/participant";
import { Component, OnInit } from "@angular/core";
import { PARTICIPANTS } from "../mock-participants";

@Component({
  selector: "app-participant",
  templateUrl: "./participant.component.html",
  styleUrls: ["./participant.component.css"]
})
export class ParticipantComponent implements OnInit {
  participants = PARTICIPANTS;
  selectedParticipant: Participant;

  constructor() {}

  ngOnInit() {}

  onSelect(participant: Participant): void {
    this.selectedParticipant = participant;
  }
}
