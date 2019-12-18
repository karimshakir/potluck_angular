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
      console.log("LOOK OVER HERE this is in event.comp.ts", events)
      this.event = events
      })
  }
  
deleteEvent(event): void{
  console.log("Event component delete", event)
  this.potluckService.deleteEvent(event)
  .subscribe(event => {
    this.event = event})
    console.log("Delete Return", this.event)
}
  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
}

