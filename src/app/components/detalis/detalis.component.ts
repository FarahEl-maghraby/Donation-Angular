import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/animations';

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.css'],
  animations:[
    fadeIn
  ]
})
export class DetalisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
