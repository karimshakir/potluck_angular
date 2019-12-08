import { Time } from "@angular/common";

export class Event {
  eventId: number;
  eventName: string;
  eventDate: string;
  startTime: Time;
  endTime: Time;
  eventLocation: string;
  constructor() {}
}
