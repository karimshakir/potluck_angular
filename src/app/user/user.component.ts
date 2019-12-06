import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  user1: User = {
    userId: 1,
    userName: "user1",
    password: "password",
    fName: "User1's first name",
    lName: "lUser1's last name"
  };
  user2: User = {
    userId: 2,
    userName: "user2",
    password: "password",
    fName: "fUser2",
    lName: "lUser2"
  };
  user3: User = {
    userId: 3,
    userName: "user3",
    password: "password",
    fName: "fUser3",
    lName: "lUser3"
  };
  constructor() {}

  ngOnInit() {}
}
