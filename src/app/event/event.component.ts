import { Time } from "@angular/common";
import { Event } from "./../models/event";
import { Component, OnInit } from "@angular/core";
// import { EVENTS } from "../mock-events";
import { PotluckService } from '../potluck.service';
import { UserEvents } from '../models/userEvents';


@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"]
})

export class EventComponent implements OnInit {
  event: Event[];
  selectedEvent: Event;
  myNewEvents: UserEvents[];

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


  updateUserEvents(event: Event): void{
    console.log("We're back", event)
    this.potluckService.updateUserEvents(event)
    .subscribe(myEvents => {
      console.log("MY EVENTS LOG", myEvents)
      this.myNewEvents = myEvents
    })
  }

  deleteEvent(event): void{
    // console.log("Event component delete", event)
    this.potluckService.deleteEvent(event)
    .subscribe(event => {
      this.event = event})
      // console.log("Delete Return", this.event)
  }
  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
}

