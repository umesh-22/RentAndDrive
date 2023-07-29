import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  loginForm : FormGroup
  constructor(private fb:FormBuilder, private service:AdminService, private admin: AdminService, private route:Router, private tostr:ToastrService) {
    this.loginForm = this.fb.group({
      email:'',
      pass:''
    })
    sessionStorage.clear();
  }

role:any =[]
  login(){
    //  for getting role
    this.admin.getList().subscribe(res=>{    
          
      this.role =res
      sessionStorage.setItem('role',this.role.role)
    

    })
 
// for finding matching values
    this.service.getList().subscribe(res=>{

      const user = res.find((p:any)=>{
       return p.email === this.loginForm.value.email && p.pass === this.loginForm.value.pass
      
       
      } )
      
      if(user){
        
        this.route.navigate(['adminDashboard'])
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
