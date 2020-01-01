import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import { Cards } from 'src/app/interfaces/cards.interface';


@Component({
  selector: 'app-campaigndetalis',
  templateUrl: './campaigndetalis.component.html',
  styleUrls: ['./campaigndetalis.component.css']

})
export class CampaigndetalisComponent implements OnInit {


  constructor(private route:ActivatedRoute ) {
   }
  
  
  ngOnInit() {
  

  }

}
