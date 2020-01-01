import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Single } from 'src/app/interfaces/single.interface';

@Component({
  selector: 'app-cdetalis',
  templateUrl: './cdetalis.component.html',
  styleUrls: ['./cdetalis.component.css']
})
export class CdetalisComponent implements OnInit {

  id= this.route.snapshot.params['id']
  data :Single[]=[
    {end:'END: JAN 18, 2025',start:'START: JAN 19, 2022',img:'assets/five.png',title:'Five Dollars Friday',id:'1',location:'New York',video:''},
    {end:'END: JAN 18, 2025',start:'START: JAN 19, 2022',img:'assets/im2.jpg',title:'60s Fundraising Night',id:'2',location:'India',video:''},
    {end:'END: JAN 18, 2025',start:'START: JAN 19, 2022',img:'assets/five.png',title:'Wales Biggest Summer Fair',id:'3',location:'Italy',video:''},
  ]
  getData(id){
   
   return this.data.filter(element=> {return (element.id == id)})

  }
   constructor(private route:ActivatedRoute ) {
    }
   

  
  ngOnInit() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v5.0";
  
      if (d.getElementById(id)){
        //if <script id="facebook-jssdk"> exists
        delete (<any>window).FB;
        fjs.parentNode.replaceChild(js, fjs);
      } else {
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'facebook-jssdk'));

    this.data = this.getData(this.id)
  }

  

  ngAfterViewInit(){
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v5.0";
  
      if (d.getElementById(id)){
        //if <script id="facebook-jssdk"> exists
        delete (<any>window).FB;
        fjs.parentNode.replaceChild(js, fjs);
      } else {
        fjs.parentNode.insertBefore(js, fjs);
      }
    }(document, 'script', 'facebook-jssdk'));
    
}
}
