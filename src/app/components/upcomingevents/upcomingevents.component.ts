import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/interfaces/cards.interface';
import { fadeIn } from 'src/app/animations';

@Component({
  selector: 'app-upcomingevents',
  templateUrl: './upcomingevents.component.html',
  styleUrls: ['./upcomingevents.component.css'],
  animations:[
    fadeIn
  ]
})
export class UpcomingeventsComponent implements OnInit {
  data :Cards[]=[
    {end:'END: JAN 18, 2025',start:'START: JAN 19, 2022',num:'10',title:'Five Dollar Friday',id:'1'},
    {end:'END: JAN 18, 2025',start:'START: JAN 19, 2022',num:'12',title:'60s Fundraising Night',id:'2'},
    {end:'END: JAN 18, 2025',start:'START: JAN 19, 2022',num:'20',title:'Wales Biggest Summer Fair',id:'3'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
