

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AdminService } from '../service/admin.service';


@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private service: AdminService, private router: Router,private tostr:ToastrService) {
   
   }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(this.service.islogged()){
      return true
    }
    else{
      this.router.navigate(['adminLogin']);
      this.tostr.error('Only Admin Can Access', 'Denied', {
        timeOut: 1000,
      })
      return false;

    }
    throw new Error('Method not implemented.');
    
  }
  
   
    
  }

