import { Component, DoCheck } from '@angular/core';
import { Route } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements DoCheck {

  constructor(private tostr:ToastrService, private router:Router) {
    
  }
  ngDoCheck(): void {
    // let currentUrl = this.router.url;
    // if(currentUrl === 'adminDashboard/bookingList' || currentUrl === 'adminDashboard/cancelList' ){
         
      
    // }
    // else{
    //   this.tostr.success('Logged out successfully', 'Logged Out', {
    //     timeOut: 2000,
    //   })
    // }
  }
  

  // For Logging Out
  toast(){
    this.tostr.success('Logged out successfully', 'Logged Out', {
      timeOut: 2000,
    })
  }

}
