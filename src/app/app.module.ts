import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { HomeComponent } from './home/home.component';
import { RouterComponent } from './router/router.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonService } from './common.service';
import { CarHostComponent } from './car-host/car-host.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CancelListComponent } from './cancel-list/cancel-list.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CancellationComponent } from './cancellation/cancellation.component';
import { CarListComponent } from './car-list/car-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FilterPipe } from './pipes/filter.pipe';
import { NgxSearchPipeModule } from 'ngx-search-pipe';
import { HostRegisterListComponent } from './host-register-list/host-register-list.component';
import { HostersCarComponent } from './hosters-car/hosters-car.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MaterialModule } from './material.module';
import { authGuard } from './guard/auth.guard';
import { DashHostComponent } from './dash-host/dash-host.component';
import { HostAddCarComponent } from './host-add-car/host-add-car.component';
import { HostProfileComponent } from './host-profile/host-profile.component';
import { HostloginComponent } from './hostlogin/hostlogin.component';
import { HostRegisterComponent } from './host-register/host-register.component';
import { FeedBackComponent } from './feed-back/feed-back.component';



const routes: Routes = [

  { path: '',redirectTo:'home' ,pathMatch:'full'},
  { path: "home", component: HomeComponent },
  {path:"searchCar",component:SearchCarComponent},
  {path:"adminDashboard",component:AdminDashboardComponent, canActivate:[authGuard],
children:[

  {path:'',redirectTo:'bookingList' ,pathMatch:'full' },
  {path:"bookingList",component:BookingListComponent ,canActivate:[authGuard]},
  {path:"cancelList",component:CancelListComponent,canActivate:[authGuard]},
  {path:"carList",component:CarListComponent,canActivate:[authGuard]},
  {path:"hostRegisterList",component:HostRegisterListComponent,canActivate:[authGuard]},
  {path:"hostersCar",component:HostersCarComponent,canActivate:[authGuard]}

]},
  {path:"adminLogin",component:AdminLoginComponent},
  {path:"dashHost",component:DashHostComponent,
// children:[
 
//   {path:"hostProfile", component:HostProfileComponent},
//   {path:"hostAddCar", component:HostAddCarComponent }
// ]
},
{path:"hostAddCar", component:HostAddCarComponent } ,
  {path:"hostlogin",component:HostloginComponent},
  {path:"hostRegister",component:HostRegisterComponent},
  {path:"cancellation",component:CancellationComponent},
  {path:"carHost",component:CarHostComponent},
  {path:"feedBack",component:FeedBackComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    SearchCarComponent,
   
    HomeComponent,
    RouterComponent,
    CarHostComponent,
    AdminLoginComponent,
    BookingListComponent,
    CancelListComponent,
    AdminDashboardComponent,
    CancellationComponent,
    CarListComponent,
    FilterPipe,
    HostRegisterListComponent,
    HostersCarComponent,
    DashHostComponent,
    HostAddCarComponent,
    HostProfileComponent,
    HostloginComponent, 
    HostRegisterComponent,
    FeedBackComponent
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
   
    MaterialModule
    
  ],
  providers: [CommonService],
  bootstrap: [RouterComponent]
})
export class AppModule { }
