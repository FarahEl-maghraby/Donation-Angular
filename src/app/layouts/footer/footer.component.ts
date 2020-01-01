import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/animations';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations:[fadeIn]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
