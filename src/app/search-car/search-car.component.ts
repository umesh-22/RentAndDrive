import { Component, OnInit } from '@angular/core';
import { ListCarsService } from '../service/list-cars.service';
import { ModalDismissReasons, NgbDatepickerModule,NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { CommonService } from '../common.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css']
})
// export class SearchCarComponent implements OnInit{

// searchForm!: FormGroup;
// argValues: any;

//   name: string = '';
//   phno: string = '';
//   email: string = '';
//   pickDate: string = '';
//   dropDate: string = '';
//   city: string = '';


// constructor(
//   private service:ListCarsService ,
//    private modalService: NgbModal, 
//    private tostr: ToastrService,
//   private fb: FormBuilder,
//   public commonService: CommonService,
//   private snake:MatSnackBar, private admin:AdminService){

//   // this.getChennaiCars();
//   //  this.getBangaloreCars();
//   //  this.getDelhiCars();
//   //  this.getMumbaiCars();
//   //  this.getKolkataCars();

  
// }
// ngOnInit(): void {
//   this.commonService.commonMessage.subscribe(m => {
//     this.argValues = m;
//   })
//         //  console.log(this.city);
//         this.name = this.argValues.name;
//     this.phno = this.argValues.phno;
//     this.email = this.argValues.email;
//     this.pickDate = this.argValues.pickDate;
//     this.dropDate = this.argValues.dropDate;
//     this.city = this.argValues.city;
//          this.display(this.city);
//     throw new Error('Method not implemented.');
    
//   }


//   filterString:string='';
// cars:any = [];


// display(searchCity:string){

//   switch(searchCity){
//     case 'Chennai':
//       this.getChennaiCars();
//       break;
//       case 'Mumbai':
//         this.getMumbaiCars();
//         break;
//         case 'Bangalore':
//           this.getBangaloreCars();
//           break;
//           case 'Delhi':
//             this.getDelhiCars();
//             break;
//             case 'Kolkata':
//               this.getKolkataCars();
//               break;
//   }
  

// }

// // get all cars list
//   getChennaiCars(){
//     this.service.getChennaiList().subscribe(res=>{
//       this.cars = res
//     })

//   }

//   getMumbaiCars(){
//     this.service.getMumbaiList().subscribe(res=>{
//       this.cars = res
//     })

//   }

//   getDelhiCars(){
//     this.service.getDelhiList().subscribe(res=>{
//       this.cars = res
//     })

//   }
//   getBangaloreCars(){
//     this.service.getBangaloreList().subscribe(res=>{
//       this.cars = res
//     })

//   }
//   kolkata:any =[];
//   getKolkataCars(){
//     this.service.getKolkataList().subscribe(res=>{
//       this.cars = res
//     })

//   }

// // For Booking Button
//   async booking(carname: any, cartype: any, price: any){
//     this.modalService.dismissAll()
//     this.snake.open('Car Booked Successfully', 'X', {
//       duration: 3000,
//       verticalPosition: 'top',
//      });
    
//     //  this.admin.addData().subscribe(res=>{
      
//     //  })
//     // this.tostr.success('Car Booked Successfully', 'Booked', {
//     //   timeOut: 3000,
//     // });

//     emailjs.init('su2MxY83ZuxTz53sl');
//       let resp = await  emailjs.send("service_svuadvb","template_gpuyr0o",{
//        email:this.argValues.email,
//        bookedCarName:carname,
//         bookedCarType:cartype,
//        oneDayRent:price,
//        location:this.argValues.city,
//         pickUpdate: this.argValues.pickDate,
//        dropDate: this.argValues.dropDatee,
//        bookingID : this.searchForm.value.id
//        })    

//   }


// // For Modal

//   closeResult = '';



// 	open(content:any) {
// 		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
// 			(result) => {
// 				this.closeResult = `Closed with: ${result}`;
// 			}
// 			// (reason) => {
// 			// 	// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
// 			// },
// 		);
// 	}

// 	// private getDismissReason(reason: any): string {
// 	// 	if (reason === ModalDismissReasons.ESC) {
// 	// 		return 'by pressing ESC';
// 	// 	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
// 	// 		return 'by clicking on a backdrop';
// 	// 	} else {
// 	// 		return `with: ${reason}`;
// 	// 	}
// 	// }
  

//   book(content:any) {
//     // this.modalService.open(longContent, { scrollable: true });
//     this.modalService.open(content, { scrollable: true ,ariaLabelledBy: 'modal-basic-title' }).result.then(
// 			(result) => {
// 				this.closeResult = `Closed with: ${result}`;
// 			}
// 			// (reason) => {
// 			// 	// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
// 			// },
// 		);

		
// 	}
// }


export class SearchCarComponent implements OnInit {

  searchForm!: FormGroup;

  argValues: any;
  searchedCity:any;
  name: string = '';
  phno: string = '';
  email: string = '';
  pickDate: string = '';
  dropDate: string = '';
  city: string = '';


  constructor(
    private service: ListCarsService,
    private modalService: NgbModal,
    private tostr: ToastrService,
    private fb: FormBuilder,
    private router: Router,
    public commonService: CommonService, 
    private admin: AdminService,
    private snake:MatSnackBar) {

    // this.getChennaiCars();
    //  this.getBangaloreCars();
    //  this.getDelhiCars();
    //  this.getMumbaiCars();
    //  this.getKolkataCars();


  }


  ngOnInit(): void {
    this.commonService.commonMessage.subscribe(m => {
      this.argValues = m;
      

    
    })
    // console.log("this is search page values")
    // console.log(this.argValues.name);
    // console.log(this.argValues.phno);
    // console.log(this.argValues.email);
    // console.log(this.argValues.pickDate);
    // console.log(this.argValues.dropDate);
    // console.log(this.argValues.city)
    this.searchedCity = this.argValues.city;;


    this.display(this.argValues.city);
    this.searchForm = this.fb.group({
      
name : this.argValues.name,
phno : this.argValues.phno,
email : this.argValues.email,
pickDate : this.argValues.pickDate,
dropDate : this.argValues.dropDate,
city : this.argValues.city,
bookingID: this.admin.GenerateCode(),
bookedDate: new Date()


    })

    throw new Error('Method not implemented.');

   
  }



  cars: any = [];


  display(searchCity: string) {

    switch (searchCity) {
      case 'Chennai':
        this.getChennaiCars();
        break;
      case 'Mumbai':
        this.getMumbaiCars();
        break;
      case 'Bangalore':
        this.getBangaloreCars();
        break;
      case 'Delhi':
        this.getDelhiCars();
        break;
      case 'Kolkata':
        this.getKolkataCars();
        break;
    }

  }


  getChennaiCars() {
    this.service.getChennaiList().subscribe(res => {
      this.cars = res
    })

  }

  getMumbaiCars() {
    this.service.getMumbaiList().subscribe(res => {
      this.cars = res
    })

  }

  getDelhiCars() {
    this.service.getDelhiList().subscribe(res => {
      this.cars = res
    })

  }
  getBangaloreCars() {
    this.service.getBangaloreList().subscribe(res => {
      this.cars = res
    })

  }

  getKolkataCars() {
    this.service.getKolkataList().subscribe(res => {
      this.cars = res
    })

  }


  
  async booking(carname: any, cartype: any, price: any) {
    this.modalService.dismissAll()
    this.snake.open('Car Booked Successfully', 'X', {
      duration: 2000,
      verticalPosition: 'top',
     });
   
           this.admin.addData(this.searchForm.value).subscribe(res=>{
     

           })
           emailjs.init('su2MxY83ZuxTz53sl');
           let resp = await  emailjs.send("service_svuadvb","template_gpuyr0o",{
            name: this.argValues.name, 
            bookedCarName:carname,
            bookedCarType:cartype,
            oneDayRent:price,
            email: this.argValues.email,
            location: this.argValues.city,
             pickUpdate: this.argValues.pickDate,
            dropDate: this.argValues.dropDate,
            bookingID: this.searchForm.value.bookingID 
            
            })
            
           
           
    

    
     
   


    setTimeout(function () {
      window.location.href = 'home';
    }, 3000);

    // this.router.navigate([]);


  }

  closeResult = '';



  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      }
      // (reason) => {
      // 	// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
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

  filterString:string =''

  book(content: any) {

    // console.log(indexValue);
    // this.modalService.open(longContent, { scrollable: true });
    this.modalService.open(content, { scrollable: true, ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      }
      // (reason) => {
      // 	// this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      // },
    );


  }
}
