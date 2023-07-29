import { Component, ViewChild } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { ListCarsService } from '../service/list-cars.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  filterString:string =''
  addForm: FormGroup
carList:any=[]
constructor(private admin:AdminService, private service:ListCarsService, private fb: FormBuilder,
  private tostr:ToastrService){
  this.getCar()
  this.addForm = this.fb.group({
    id: new FormControl('') ,
    carName: new FormControl('', Validators.required) ,
    price:new FormControl('', Validators.required)  ,
    type:new FormControl('', Validators.required)  ,
    transmission:new FormControl('', Validators.required)  ,
    fuel:new FormControl('', Validators.required)  ,
    seater: new FormControl('', Validators.required) ,
    baggage: new FormControl('', Validators.required),
    image:    new FormControl('', Validators.required) 

  })
  console.log(this.addForm.value)
}
isEditMode: boolean = false; 
show = false;

showAdd(){
  this.show = this.show == false ? true :false
}

getCar(){
  this.service.getChennaiList().subscribe(res=>{
    this.carList =res
  })
}
// Crud operations
edit(user:any){
  this.addForm.patchValue(user);
  this.show = true;
  this.isEditMode=true;
}
onSubmit(){
  if(!this.isEditMode){
    this.addCar();
  } else {
    this.updateCar();
  }
}
  addCar(){
  this.service.addChennaiList(this.addForm.value).subscribe(res=>{
    this.tostr.success('Added Successfully', 'Added', {
      timeOut: 2000,
    })
   this.addForm.reset()
   this.show= false;
   this.getCar()
    
  })
}
  updateCar(){
    this.service.update(this.addForm.value.id, this.addForm.value).subscribe(res=>{
      this.tostr.success('Updated Successfully', 'Updated', {
        timeOut: 2000,
      })
     this.addForm.reset()
     this.show= false;
     this.getCar()
  })
}


deleteCar(id:number) {
  var status = confirm("Are you sure want to Delete?")
  if(status)
  {this.service.deleteChennaiList(id).subscribe(
    () => {
      this.getCar(); 
    });
  }
}

}



  








 