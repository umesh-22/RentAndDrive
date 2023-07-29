import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.css']
})
export class FeedBackComponent {
  formVar !: FormGroup;

  constructor(private fb: FormBuilder , private tostr: ToastrService) {}
  ngOnInit(){
    this.formVar=this.fb.group({
      name:'',
      email:'',
      id:'',
      satisfied:'',
      problems:''
    });
    
  }

  onSubmit() {
    
    if(this.formVar.valid){
    this.formVar.reset()
    this.tostr.success('Thanks for your Feedback', 'Sended Successfully')
  }
else{
  this.tostr.error('', 'Invalid')
}
    
    
  }

}
