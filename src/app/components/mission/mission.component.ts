import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/interfaces/data.interface';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

  data:Data[]=[
    {icon:"fas fa-tint fa-3x",title:'Water Sourcing',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'},
    {icon:"fas fa-book-open fa-3x",title:'Education',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'},
    {icon:"fas fa-home fa-3x",title:'Shelters',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'},
    {icon:"fab fa-envira fa-3x",title:'Better Place',text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'}
  ]
  constructor() { }

  ngOnInit() {

  }

}
