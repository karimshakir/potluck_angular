
import { Component, OnInit } from "@angular/core";
import { Event } from '../models/event';
import { PotluckService } from '../potluck.service';
Event

@Component({
  selector: "app-participant",
  templateUrl: "./participant.component.html",
  styleUrls: ["./participant.component.css"]
})
export class ParticipantComponent implements OnInit {
  event: Event[];
 

  constructor(private potluckService: PotluckService) {}
  
  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.potluckService.getEvents()
    .subscribe(events => {
      console.log("in what was Participants", events)
      this.event = events
      })
  }

  // onSelect(participant: Participant): void {
  //   this.selectedParticipant = participant;
  // }
}
