import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import emailjs from 'emailjs-com';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-add-car',
  templateUrl: './host-add-car.component.html',
  styleUrls: ['./host-add-car.component.css']
})
export class HostAddCarComponent {
addForm:FormGroup
  
constructor(private fb:FormBuilder, private admin:AdminService , private tostr: ToastrService, private modalService: NgbModal,
  private router: Router){
  this.addForm = this.fb.group({
    carName: new FormControl('', {validators:[Validators.required]}) ,
    email: new FormControl('', {validators:[Validators.required]}) ,
    price:new FormControl('', {validators:[Validators.required]})  ,
    carno:new FormControl('', {validators:[Validators.required]})  ,
    city:new FormControl('', {validators:[Validators.required]})  ,
    type:new FormControl('',{validators:[Validators.required]})  ,
    transmission:new FormControl('',{validators:[Validators.required]})  ,
    fuel:new FormControl('',{validators:[Validators.required]})  ,
    seater: new FormControl('',{validators:[Validators.required]}) ,
    baggage: new FormControl('',{validators:[Validators.required]}),
    image:    new FormControl('',{validators:[Validators.required]}) ,
    custId:   new FormControl('',{validators:[Validators.required]})
 
  })
  // console.log(this.addForm.value)
}
hosts:any=[]

closeResult = '';



openScrollableContent(content:any) {
		this.modalService.open(content, { scrollable: true, ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				// this.closeResult = `Closed with: ${result}`;
			},
			// (reason) => {
			// 	this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			// },
		);
	}

	// private getDismissReason(reason: any): string {
	// 	if (reason === ModalDismissReasons.ESC) {
	// 		return 'by pressing ESC';
	// 	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
	// 		return 'by clicking on a backdrop';
	// 	} else {
	// 		return `with: ${reason}`;
	// 	}
	// }

  async addCar(){
  
   if(this.addForm.valid){ this.admin.addHostCar(this.addForm.value).subscribe(async res=>{
      this.tostr.success('Car Added Successfully', 'Login', {
        timeOut: 1000,
      })
      emailjs.init('JER3o-89gyclTbdo4')
      let resp = await  emailjs.send("service_p6moc32","template_k60h3iq",{
        name: 'Host',
        carName: this.addForm.value.carName,
        type: this.addForm.value.type,
        price: this.addForm.value.price,
        transmission: this.addForm.value.transmission,
        seater: this.addForm.value.seater,
        baggage: this.addForm.value.baggage,
        email: this.addForm.value.email,
        });
        this.addForm.reset();
        this.modalService.dismissAll()
      
    }
  )
   }
   else{
    this.tostr.error('Invalid inputs' ,'Invalid')
   }
    
  
  
}

logout(){
  this.router.navigate(['hostlogin'])
  this.tostr.success('Host Logged out' ,'Logged Out',{timeOut:2000})
}
}

