import { Event } from "./models/event";

export const EVENTS: Event[] = [
  {
    eventId: 1,
    eventName: "retirement1",
    eventDate: "2019-01-11",
    startTime: {
      hours: 1,
      minutes: 30
    },
    endTime: {
      hours: 10,
      minutes: 30
    },
    eventLocation: "room 112",
    dish: "fish"
  },
  {
    eventId: 2,
    eventName: "retirement2",
    eventDate: "2019-02-12",
    startTime: {
      hours: 2,
      minutes: 30
    },
    endTime: {
      hours: 10,
      minutes: 30
    },
    eventLocation: "room 212",
    dish: "fish"
  },
  {
    eventId: 3,
    eventName: "retirement3",
    eventDate: "2019-03-13",
    startTime: {
      hours: 3,
      minutes: 30
    },
    endTime: {
      hours: 10,
      minutes: 30
    },
    eventLocation: "room 312",
    dish: "fish"
  },
  {
    eventId: 4,
    eventName: "retirement4",
    eventDate: "2019-04-14",
    startTime: {
      hours: 4,
      minutes: 30
    },
    endTime: {
      hours: 10,
      minutes: 30
    },
    eventLocation: "room 412",
    dish: "fish"
  }
];
