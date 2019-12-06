import { Time } from "@angular/common";
import { Event } from "./../models/event";
import { Component, OnInit } from "@angular/core";
import { EVENTS } from "../mock-events";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"]
})

// event1: Event = {
//   eventId: 1,
//   eventName: "retirement1",
//   eventDate: "2019-01-11",
//   eventTime: {
//     hours: 1,
//     minutes: 30
// },
//   eventLocation: "room 112"
// };
export class EventComponent implements OnInit {
  events = EVENTS;
  selectedEvent: Event;

  constructor() {}

  ngOnInit() {}

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
}
