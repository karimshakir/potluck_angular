import { Component, OnInit } from '@angular/core';
import { PotluckService } from '../potluck.service';
import { NewEvent } from '../models/newEvent';
import { Time } from '@angular/common';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.css']
})
export class NewEventComponent implements OnInit {
  
  
  new = {
    name: "",
    date: "",
    startTime: "",
    endTime: "",
    location: "",
    dish:""
  } 
  
  constructor(private potluckService: PotluckService) { }

  postEvent( newName: string, newLocation: string, newDate: Date, startTime: Time, endTime: Time, dish: String ): void {
    console.log("NEWEW", newName, newLocation, newDate, startTime, endTime, dish )
    this.potluckService.postEvent({newName, newLocation, newDate, startTime, endTime, dish} as NewEvent)
  }
  ngOnInit() {
  }
  
}
