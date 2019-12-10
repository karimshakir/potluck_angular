import { Component, OnInit } from '@angular/core';
// import { NewEvent } from '../models/newEvent';

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
    location: ""
  } 
  
  constructor() { }
  
  ngOnInit() {
  }
  
}
