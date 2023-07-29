import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hosters-car',
  templateUrl: './hosters-car.component.html',
  styleUrls: ['./hosters-car.component.css']
})
export class HostersCarComponent {
  filterString:string ='';
  constructor(private admin:AdminService, private tostr : ToastrService) {
    this.getCars()
    
  }
  lists=[]
  getCars(){
    this.admin.getHostCar().subscribe(res=>{
      this.lists =res;
    })
  }
  delete(id:any){
    this.admin.deleteHostCar(id).subscribe(res=>{
      this.getCars()
      
      this.tostr.success('Hosters Car Successfully', 'Deleted', {
        timeOut: 3000,
      })

    })

  }

}
