import { Component, OnInit } from '@angular/core';
import { Checkbox } from '../models/checkbox';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {


  checkbox: Checkbox = {
    attending: false
  }
  constructor() { }
  
  ngOnInit() {
  }

}
