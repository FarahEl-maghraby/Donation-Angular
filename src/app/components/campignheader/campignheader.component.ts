import { Component, OnInit } from '@angular/core';
import { Cards } from 'src/app/interfaces/cards.interface';
import { ActivatedRoute } from '@angular/router';
import { Single } from 'src/app/interfaces/single.interface';

@Component({
  selector: 'app-campignheader',
  templateUrl: './campignheader.component.html',
  styleUrls: ['./campignheader.component.css']
})
export class CampignheaderComponent implements OnInit {

  id= this.route.snapshot.params['id']
  data :Single[]=[
    {end:'END: JAN 18, 2025',start:'START: JAN 19, 2022',img:'assets/five.png',title:'Five Dollars Friday',id:'1',location:'New York',video:''},
    {end:'END: JAN 18, 2025',start:'START: JAN 19, 2022',img:'assets/im2.jpg',title:'60s Fundraising Night',id:'2',location:'Italy',video:''},
    {end:'END: JAN 18, 2025',start:'START: JAN 19, 2022',img:'assets/five.png',title:'Wales Biggest Summer Fair',id:'3',location:'India',video:''},
  ]
  getData(id){
   
   return this.data.filter(element=> {return (element.id == id)})
   //this.data= this.getData(this.id)

  }
   constructor(private route:ActivatedRoute ) {
    this.data= this.getData(this.id)
    }
   
   
   ngOnInit() {
   this.data= this.getData(this.id)
 
   }

 }