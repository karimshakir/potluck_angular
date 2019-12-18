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
  
  newEvent: NewEvent[]
 new = NewEvent;
 
  
  constructor(private potluckService: PotluckService) { }

  postEvent(  event_name: string, event_date: Date, start_time: Time, end_time: Time, location: string,  ): void {
    console.log("Name", event_name)
    console.log("Location", location)
    console.log("Date", event_date )
    console.log("Start",start_time )
    console.log("End",  end_time )
    // console.log("Dish", dish )
    this.potluckService.postEvent({ event_name, event_date, start_time, end_time, location, } as NewEvent)
    .subscribe(events => {
      console.log("CHECK IT OVER HERE", events)
      this.newEvent = events
      })
  }
  ngOnInit() {
  }
  
}
