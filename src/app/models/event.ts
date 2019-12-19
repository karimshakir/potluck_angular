import { Time } from "@angular/common";

export class Event {
  eventid: number;
  event_name: string;
  event_date: string;
  start_time: Time;
  end_time: Time;
  location: string;
  // dish: string;
  userid: number;
  constructor() {}
}
