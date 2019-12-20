import { Component, OnInit, Input } from '@angular/core';
import { Checkbox } from '../models/checkbox';
import { Event } from '../models/event';
import { PotluckService } from '../potluck.service';
import { UserEvents } from '../models/userEvents';
UserEvents
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

@Input() event: Event;

myNewEvents: UserEvents[];
  checkbox: Checkbox = {
    attending: false
  }
  constructor(private potluckService: PotluckService) {}
  
  // updateUserEvents(event: Event): void{
  //   console.log("TOP UUE Log", event)
  //   this.potluckService.updateUserEvents(event)
  //   .subscribe(myEvents => {
  //     console.log("MY EVENTS LOG", myEvents)
  //     this.myNewEvents = myEvents
  //   })
  // }

  ngOnInit() {
    console.log()
  }

}
