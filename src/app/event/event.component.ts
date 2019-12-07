import { Time } from "@angular/common";
import { Event } from "./../models/event";
import { Component, OnInit } from "@angular/core";
import { EVENTS } from "../mock-events";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"]
})

export class EventComponent implements OnInit {
  events = EVENTS;
  selectedEvent: Event;

  constructor() {}

  ngOnInit() {}

  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
}

