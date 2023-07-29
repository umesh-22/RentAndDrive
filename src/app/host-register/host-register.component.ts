import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from './host-register.validation';
import { AdminService } from '../service/admin.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-host-register',
  templateUrl: './host-register.component.html',
  styleUrls: ['./host-register.component.css']
})
export class HostRegisterComponent {
  registerForm :FormGroup 
  constructor(private fb:FormBuilder, private admin: AdminService, private tostr: ToastrService, private router:Router) {
    this.registerForm = this.fb.group({
      name: new FormControl('', {validators:[Validators.required]}),
      phno: new FormControl('', {validators:[Validators.required]}),
      city: new FormControl('', {validators:[Validators.required]}),
      email: new FormControl('', {validators:[Validators.required]}),
      password: new FormControl('', {validators:[Validators.required]}),
      custID : this.admin.GenerateCode()
    })
    
  }
  
 async register(){
  if(this.registerForm.valid){
  this.admin.addHostRegister(this.registerForm.value).subscribe(res=>{
    this.tostr.success('Registered Successfully', 'Registered', {
      timeOut: 2000,
    });
   this.registerForm.reset()
   this.router.navigate(['hostlogin'])
  })
 
  
 
  emailjs.init('JER3o-89gyclTbdo4')
  let resp = await   emailjs.send("service_p6moc32","template_sr7ffxg",{
    custID: this.registerForm.value.custID,
    name: this.registerForm.value.name,
    email: this.registerForm.value.email,
    });
}else{
  this.tostr.error('Invalid Credentials', 'Invalid', {
    timeOut: 2000,
  });

}
 } 

}
