import { Event } from "./models/event";

export const USEREVENTS: Event[] = [
  {
    eventid: 1,
    event_name: "retirement1",
    event_date: "2019-01-11",
    start_time: {
      hours: 1,
      minutes: 30
    },
    end_time: {
      hours: 10,
      minutes: 30
    },
    location: "room 112",
    dish: "fish"
  },
  {
    eventid: 2,
    event_name: "retirement4",
    event_date: "2019-04-14",
    start_time: {
      hours: 4,
      minutes: 30
    },
    end_time: {
      hours: 10,
      minutes: 30
    },
    location: "room 412",
    dish: "don't know yet :.("
  }
];
