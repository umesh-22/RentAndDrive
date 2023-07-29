import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-host-register-list',
  templateUrl: './host-register-list.component.html',
  styleUrls: ['./host-register-list.component.css']
})
export class HostRegisterListComponent {
  filterString:string =''
  constructor(private admin:AdminService, private tostr:ToastrService) {
    this.getList()
    
  }
  lists=[]
  getList(){
    this.admin.getHostRegister().subscribe(res=>{
      this.lists =res;

    })
  }

  deleteData(id:any){
  this.admin.deleteHostRegister(id).subscribe(res=>{
    
    this.getList()
    this.tostr.success('Host Deleted Successfully', 'Deleted', {
      timeOut: 3000,
    })
  })

  }
}
