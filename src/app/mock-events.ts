import { Event } from "./models/event";

export const EVENTS: Event[] = [
  {
    eventId: 1,
    eventName: "retirement1",
    eventDate: "2019-01-11",
    eventTime: {
      hours: 1,
      minutes: 30
    },
    eventLocation: "room 112"
  },
  {
    eventId: 2,
    eventName: "retirement2",
    eventDate: "2019-02-12",
    eventTime: {
      hours: 2,
      minutes: 30
    },
    eventLocation: "room 212"
  },
  {
    eventId: 3,
    eventName: "retirement3",
    eventDate: "2019-03-13",
    eventTime: {
      hours: 3,
      minutes: 30
    },
    eventLocation: "room 312"
  },
  {
    eventId: 4,
    eventName: "retirement4",
    eventDate: "2019-04-14",
    eventTime: {
      hours: 4,
      minutes: 30
    },
    eventLocation: "room 412"
  }
];
