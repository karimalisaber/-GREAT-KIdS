import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  portfolioImages:  Array<any> = []; 
  portfolioImagesWindow:  Array<any> = []; 
  url ='assets/images/portfolio/'; 
  title = 'GREAT KIdS';
  kairm;
  

  constructor(private _lightbox: Lightbox){
    // this.setPortfolio();
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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

  send(data){
    console.log(data);
    
  }

}
