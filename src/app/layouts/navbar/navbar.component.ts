import { Component, OnInit } from '@angular/core';

import { Links } from 'src/app/interfaces/linking.interface';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
   
  data :Links[]=[
    {t:'Five Dollar Friday',id:'1'},
    {t:'60s Fundraising Night',id:'2'},
    {t:'Wales Biggest Summer Fair',id:'3'},
  ]


  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    
  }

}
