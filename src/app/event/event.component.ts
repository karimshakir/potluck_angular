import { Time } from "@angular/common";
import { Event } from "./../models/event";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event",
  templateUrl: "./event.component.html",
  styleUrls: ["./event.component.css"]
})
export class EventComponent implements OnInit {
  event1: Event = {
    eventId: 1,
    eventName: "retirement1",
    eventDate: "2019-01-11",
    eventTime: {
      hours: 1,
      minutes: 30
    },
    eventLocation: "room 112"
  };

  event2: Event = {
    eventId: 2,
    eventName: "retirement2",
    eventDate: "2019-02-12",
    eventTime: {
      hours: 2,
      minutes: 30
    },
    eventLocation: "room 212"
  };

  event3: Event = {
    eventId: 3,
    eventName: "retirement3",
    eventDate: "2019-03-13",
    eventTime: {
      hours: 3,
      minutes: 30
    },
    eventLocation: "room 312"
  };

  event4: Event = {
    eventId: 4,
    eventName: "retirement4",
    eventDate: "2019-04-14",
    eventTime: {
      hours: 4,
      minutes: 30
    },
    eventLocation: "room 412"
  };

  constructor() {}

  ngOnInit() {}
}
