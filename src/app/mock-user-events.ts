import { Event } from "./models/event";

export const USEREVENTS: Event[] = [
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
    eventId: 1,
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
    dish: "don't know yet :.("
  }
];
