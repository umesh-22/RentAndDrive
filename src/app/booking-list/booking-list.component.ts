import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent {
  constructor(private admin:AdminService){
  }
  ngOnInit(): void {
    this.getData();
  }
  filterString:string ='';
  data:any=[]
  // to get Booking data
  getData() {
    this.admin.getData().subscribe(
      (response) => {
        this.data = response;
      });
  }
   // to delete Booking data
  deleteData(id: number) {
    this.admin.delete(id).subscribe(
      () => {
      
        console.log('Data deleted successfully');
        this.getData(); 
      });
  }
  
  
  deleteBooking(bookingID: number) {
    this.admin.deleteBooking(bookingID).subscribe(
      () => {
        console.log('Data deleted successfully');
        
      });
  
  }
}
