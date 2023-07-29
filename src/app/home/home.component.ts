import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  submitted = false;
  bookCarForm: any;

  bookCar = {
    name: '',
    phno: '',
    email: '',
    pickDate: '',
    dropDate: '',
    city: ''
  }


  constructor(private commonService: CommonService, private router: Router,config: NgbCarouselConfig) {
    this.createForm();
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  createForm() {
    this.bookCarForm = new FormGroup({
      'name': new FormControl(this.bookCar.name, [
        Validators.required,
        Validators.minLength(3)
      ]),
      'phno': new FormControl(this.bookCar.phno, [
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
        Validators.minLength(10)
      ]),
      'email': new FormControl(this.bookCar.email, [
        Validators.required,
        Validators.email
      ]),
      'pickDate': new FormControl(this.bookCar.pickDate, [
        Validators.required,
      ]),
      'dropDate': new FormControl(this.bookCar.dropDate, [
        Validators.required,
      ]),
      'city': new FormControl(this.bookCar.city, [
        Validators.required,
      ]),
    })
  }

  img1: string = "https://yandex-images.clstorage.net/e9YZ9F383/e3049dM4PtiR/48AJY79fj0JYkNVSm-meE7lJbsJRL_EQAcWD6PWeCNUXMjBwwz21rEIdiBwblLfimH6M8lmpuypvzXxX3KvcpOf0zcf-6homWfWV0qu5v8ZteH8H8WogtCQFEogQHpilMcGSV8QLx09Qqt-L3yTiZ70KPQcpHH25vkgrpF9seWMh0RtA-05t8g9z5_Cqisylaqsv5nI4ELLGtvL_QCnPA6CCMNV0ChQekVq9KB4HYBRvKVmkCxx-qMiI2odeP4uhIhMocsleX3EcQMfjS_j-plgLfQZBq5Mg9jcTn2DZDTDC40FUxYp0vNGoXFsM53B1DykZ1wqN7QlKeBl37VwJcFLiCSLr7c5R3vP0ULlKX4R5-Y9HMXhAspdUYI9yW4_hUsARxzQIJq7xCe-4v-SCVX9omqQI_r7I2iraxu_c6XBRkHjB-Uz_833jhODaqW_HSMitx4PbcSF0lFLd8NhM80Gg8MaGihVNAHnP-4xEwCZua5j2ec_8KsrI2qUtjJiBEFDI4qld3IO-slQiyvhuxZkKf8fxyuGRNuSQjxB7jBJiYfCW5OqljSFY7bmP5XDEvnnpJJrsDPsKeTnl3944U3HiaVCrf85SzABEcznbTuf6mH32gXly8BZmkX8wqH7BouHiZaWI9dzBqH_anRXgNp0622QbHExauspot9wMu-PCckjyqexdYu1QJgILKe9E2jh9FzLZQIC0dtKPY4ksIkCSQiVUOyVcYunsSx6mUYXvSRs1Kq8_Gis5WqZcTjhTQeIqAjkuHmI9QkYiashPVmk6PhZT-kFTBMXi3KGpnyGQg3L1VzrE_mJrjygs9jGmjdiYpriuTCr4edjW7o4a0OLQWmBbzi_R_IHWUfqp7hQ7yU6HgTox8Ce1gIyDe76Q00MSJPZalN7CGv5L7KQAlI4q2XaanoxoKnopl6yf-zMwkUhwq-5MU36iF9Cq6P2nmJtfRnH7EAL1t0Lfc";

  img2: string = "https://openclipart.org/image/800px/266275"

  img3: string = "https://avatars.mds.yandex.net/i?id=ef131364cb44c163601c9ccdc510b71aaa046e00-8370529-images-thumbs&n=13"

  img4: string = "https://us.123rf.com/450wm/booblgum/booblgum2103/booblgum210300114/165614115-outline-kolkata-india-city-skyline-with-historic-buildings-isolated-on-white-vector-illustration.jpg?ver=6";

  images: any[] = [
    this.img1,
    this.img2,
    this.img3,
    this.img4
  ];


  locations: string[] =
    [
      "Mumbai",
      "Chennai",
      "Bangalore",
      "Kolkata"
    ];

  homePageDatas = {
    name: '',
    phno:'',
    email:'',
    pickDate:'',
    dropDate:'',
    city: ''

  }


  showDatas() {
    console.log(this.bookCarForm.get('name').value);
    console.log(this.bookCarForm.get('phno').value);
    console.log(this.bookCarForm.get('email').value);
    console.log(this.bookCarForm.get('pickDate').value);
    console.log(this.bookCarForm.get('dropDate').value);
    console.log(this.bookCarForm.get('city').value);


    this.homePageDatas = {
      name: this.bookCarForm.get('name').value,
      phno: this.bookCarForm.get('phno').value,
      email: this.bookCarForm.get('email').value,
      pickDate: this.bookCarForm.get('pickDate').value,
      dropDate: this.bookCarForm.get('dropDate').value,
      city: this.bookCarForm.get('city').value,
    }

    console.log(this.homePageDatas);

   this.commonService.sendData(this.homePageDatas);

    this.onSubmit();
   this.router.navigate(['/searchCar']);

  }

  onSubmit() {
    this.submitted = true;
  }

  cauroselCars: string[] = [
      'https://www.tikigo.com/wp-content/uploads/suzuki-swift-dvs-car-rentals.jpg',
    'https://www.mrcarmats.co.uk/store/images/range-image/mxuv.jpg',
    'https://www.forefronttours.com/wp-content/uploads/2019/05/toyota_innova.jpg',
    'https://avatars.mds.yandex.net/i?id=4e5cd1bac1580c94e223b86b6dff974a262b594b-5424324-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=65d449909bb9525d63afabbe956bce4cc09414c4-5331535-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=1462c94f49c93e9acdf4f8f72c1074ce-5288011-images-thumbs&n=13',
    'https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-4.jpeg?isig=0&q=75',
    'data:image/jpeg;base64,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',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWvkPi_SMt4_w4tUYYv1MORjwzQpqPIqXGle3Q3ob8OFFgTF-8xTODXsvyppChW5IEHM&usqp=CAU'
  ]

  carName: string[] = [
    'INNOVA',
    'SWIFT',
    'EECO',
    'Sumo',
    'Grand i10',
    'INNOVA',
    'SWIFT',
    'Audi',
    'BMW'
     
  ]

  becomeHost() {
    this.router.navigate(['/hostRegister']);
  }

  

}
