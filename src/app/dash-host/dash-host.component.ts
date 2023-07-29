import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dash-host',
  templateUrl: './dash-host.component.html',
  styleUrls: ['./dash-host.component.css']
})
export class DashHostComponent {
constructor(private tostr:ToastrService) {
  
}
  toast(){
    this.tostr.success('Logged out successfully', 'Logged Out', {
      timeOut: 2000,
    })
  }
}
