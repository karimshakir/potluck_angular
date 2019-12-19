import { Event } from "./models/event";

export const EVENTS: Event[] = [
  {
   userid:2,
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
    // dish: "fish"
  },
  { userid:2,
    eventid: 2,
    event_name: "retirement2",
    event_date: "2019-02-12",
    start_time: {
      hours: 2,
      minutes: 30
    },
    end_time: {
      hours: 10,
      minutes: 30
    },
    location: "room 212",
    // dish: "salad"
  },
  {
    userid:2,
    eventid: 3,
    event_name: "retirement3",
    event_date: "2019-03-13",
    start_time: {
      hours: 3,
      minutes: 30
    },
    end_time: {
      hours: 10,
      minutes: 30
    },
    location: "room 312",
    // dish: "soup"
  },
  {
    userid:2,
    eventid: 4,
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
    // dish: "don't know yet :.("
  }
];
