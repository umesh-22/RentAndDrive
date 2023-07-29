import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import emailjs from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent {
  cancelForm :FormGroup
  constructor(private fb:FormBuilder , private admin:AdminService, private tostr:ToastrService) {
    this.cancelForm = this.fb.group({
      bookingID: new FormControl('', {validators:[Validators.required]}),
      name: new FormControl('', {validators:[Validators.required]}),
      email: new FormControl('', {validators:[Validators.required]}),
      pickUpDate: new FormControl('', {validators:[Validators.required]}),
      todayDate: new Date(),
    })

   
  }
// for Cancel Button
  async cancelBooking(){
    if(this.cancelForm.valid){
  //         this.admin.deleteBooking(this.cancelForm.value.bookingID).subscribe(res=>{
     
  // })

  // for removing data in booking list and adding in cancel list
  this.admin.getData().subscribe(res=>{
    const id = res.find((p:any)=>{
      if(p.bookingID ===this.cancelForm.value.bookingID){
        this.admin.deleteBooking(p.id).subscribe(res=>{
          
        })
      }
    })
  })
  this.admin.getData().subscribe(async res=>{
    const booking = res.find((p:any)=>{
      return p.bookingID === this.cancelForm.value.bookingID
    })
    if(booking){

      this.tostr.success('Booking cancelled Successfully', 'Cancellation', {
        timeOut: 3000,
      })
      this.admin.addCancel(this.cancelForm.value).subscribe(res=>{
      
      })
      //  For sending email
    emailjs.init('su2MxY83ZuxTz53sl');
    let resp = await  emailjs.send("service_svuadvb","template_jhru1cg",{
     email:this.cancelForm.value.email,
     bookingID : this.cancelForm.value.bookingID,
      pickUpdate: this.cancelForm.value.pickUpDate,
    name:this.cancelForm.value.name
     
     })
     this.cancelForm.reset()
    }
    else{
      this.tostr.error('Please enter right information', 'Invalid', {
        timeOut: 2000,
      })
      this.cancelForm.reset()
      
    }

  })
      }
      else{
        this.tostr.error('Please enter right information', 'Invalid', {
          timeOut: 2000,
        })
      }
      }

    }


  
