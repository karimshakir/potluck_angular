import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { USEREVENTS } from '../mock-user-events';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user = USEREVENTS;

  constructor() {}

  ngOnInit() {}
}
