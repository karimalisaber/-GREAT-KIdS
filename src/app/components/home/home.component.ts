import { Component, OnInit, OnDestroy } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  portfolioImages:  Array<any> = []; 
  portfolioImagesWindow:  Array<any> = []; 
  url ='assets/images/portfolio/'; 
  title = 'GREAT KIdS';

  constructor(private _lightbox: Lightbox){
  }

  ngOnInit(): void {
    this.setPortfolio();
  }

  setPortfolio(){
    for(let i = 1; i<44; i++){
      if(i<13)
        this.portfolioImages.push( this.url + i +'.jpg');
      this.portfolioImagesWindow.push( {'src': this.url + i +'.jpg'});      
    };
  }

  open(i){
    this._lightbox.open(this.portfolioImagesWindow, 1);  
  }

}
