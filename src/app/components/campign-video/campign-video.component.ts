import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Single } from 'src/app/interfaces/single.interface';

@Component({
  selector: 'app-campign-video',
  templateUrl: './campign-video.component.html',
  styleUrls: ['./campign-video.component.css']
})
export class CampignVideoComponent implements OnInit {

  id= this.route.snapshot.params['id']
  data :Single[]=[
    {end:'END: JAN 18, 2025',start:'START: JAN 19, 2022',img:'assets/five.png',title:'Five Dollars Friday',id:'1',location:'New York',video:'https://www.youtube.com/embed/oSOMdra32w4'},
    {end:'END: JAN 18, 2025',start:'START: JAN 19, 2022',img:'assets/im2.jpg',title:'60s Fundraising Night',id:'2',location:'Italy',video:'https://www.youtube.com/watch?v=myd0wInygOw'},
    {end:'END: JAN 18, 2025',start:'START: JAN 19, 2022',img:'assets/five.png',title:'Wales Biggest Summer Fair',id:'3',location:'India',video:'https://www.youtube.com/watch?v=Wa5whIHD9pg'},
  ]
  getData(id){
   
   return this.data.filter(element=> {return (element.id == id)})

  }
   constructor(private route:ActivatedRoute ) {
    }
   
   
   ngOnInit() {
   this.data= this.getData(this.id)
 
   }
 
 }
