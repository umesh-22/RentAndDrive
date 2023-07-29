import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hostlogin',
  templateUrl: './hostlogin.component.html',
  styleUrls: ['./hostlogin.component.css']
})
export class HostloginComponent {

loginForm :FormGroup
  constructor(private admin:AdminService, private fb: FormBuilder, private route:Router,private tostr:ToastrService) {
    this.loginForm = this.fb.group({
      email:'',
      pass:''
    })
 
  }


  login(){
   
    this.admin.getHostRegister().subscribe(res=>{

      const user = res.find((p:any)=>{
       return p.email === this.loginForm.value.email && p.password === this.loginForm.value.pass
      
       
      } )
      
      if(user){
        
        this.route.navigate(['/hostAddCar'])
        this.tostr.success('Login Successfully', 'Login', {
          timeOut: 1000,
        })  
      }
      else{
        
        this.tostr.error('Wrong Credentials', 'InValid', {
          timeOut: 2000,
        })
      }
    })


  }
}
