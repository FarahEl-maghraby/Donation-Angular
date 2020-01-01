import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/animations';

@Component({
  selector: 'app-furtherdetalis',
  templateUrl: './furtherdetalis.component.html',
  styleUrls: ['./furtherdetalis.component.css'],
  animations: [
    fadeIn
  ]
})
export class FurtherdetalisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
