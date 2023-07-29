import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-host-profile',
  templateUrl: './host-profile.component.html',
  styleUrls: ['./host-profile.component.css']
})
export class HostProfileComponent {

  constructor(private admin:AdminService) {
    this.getHost(1)
    
  }
  hosts:any=[]
  getHost(id:any){
    this.admin.getHostbyID(id).subscribe(res=>{
      this.hosts = res

    })
  }

}
