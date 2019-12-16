import { Time } from "@angular/common";
import { Event } from "./../models/event";
import { Component, OnInit } from "@angular/core";
// import { EVENTS } from "../mock-events";
import { PotluckService } from '../potluck.service';


@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"]
})

export class EventComponent implements OnInit {
  event: Event[];
  selectedEvent: Event;

  constructor(private potluckService: PotluckService) {}
  
  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.potluckService.getEvents()
    .subscribe(events => {
      console.log("LOOK OVER HERE", events)
      this.event = events
      })
  }
  

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
}

