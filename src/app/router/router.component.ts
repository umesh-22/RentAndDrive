import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements DoCheck {

  showFooter: boolean = true
  constructor(private router: Router) {
    
    
  }
  ngDoCheck(): void {
    // let currentUrl = this.router.url;
    // if(currentUrl == '/hostAddCar'){
    // this.showFooter = false;
    // }
    // else{
    //   this.showFooter = true
    // }
    // throw new Error('Method not implemented.');
  }


 

}
