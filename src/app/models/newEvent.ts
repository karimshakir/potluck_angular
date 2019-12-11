import { Time } from "@angular/common";

export class NewEvent {
  newId: number;
  newName: string;
  newDate: string;
  startTime: Time;
  endTime: Time;
  newLocation: string;
  dish: string;
  constructor() {}
}