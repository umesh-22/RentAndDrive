import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-cancel-list',
  templateUrl: './cancel-list.component.html',
  styleUrls: ['./cancel-list.component.css']
})
export class CancelListComponent {
  constructor(private admin:AdminService) {
    this.cancelList()
    
  }
  cancel:any=[]
  // to get cancel Data
  cancelList(){
    this.admin.getCancel().subscribe(res=>{
      this.cancel =res
    })
  }

}
