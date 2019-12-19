import { Time } from "@angular/common";

export class NewEvent {
  eventid: number;
  event_name: string;
  event_date: Date;
  start_time: Time;
  end_time: Time;
  location: string;
  // dish: string;
  // userid: number;
  constructor() {}
}