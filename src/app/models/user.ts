import { Time } from "@angular/common";

export class User {
  eventId: number;
  eventName: string;
  eventDate: string;
  startTime: Time;
  endTime: Time;
  eventLocation: string;
  dish: string;
  constructor() {}
}
