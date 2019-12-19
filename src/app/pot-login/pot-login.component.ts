import { Component, OnInit } from '@angular/core';
import { PotluckService } from '../potluck.service';
// import { Event } from '../models/event';
import { User } from '../models/user';

@Component({
  selector: 'app-pot-login',
  templateUrl: './pot-login.component.html',
  styleUrls: ['./pot-login.component.css']
})
export class PotLoginComponent implements OnInit {

  constructor(private potluckService: PotluckService) { }

  
  user: User[]

  getUser(): void{
    // console.log()
    this.potluckService.getUser()
    .subscribe(events => {
      console.log("First", events)
      this.user = events;
      console.log("GET USER Return", this.user)
    })
  }
  ngOnInit() {
  }

}
