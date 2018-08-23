import { Component, OnInit } from '@angular/core';
import { authService } from '../auth.service';
import { NgForm } from '@angular/forms/src/directives';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userInfo : User;
  constructor(private authService: authService,private router: Router,private toastr : ToastrService) { 

    //tried to fix the error "Cannot read property 'UserName' of undefined" with this to define 
    //https://stackoverflow.com/questions/47089257/can-not-read-property-username-of-undefined-angular-2
     this.userInfo = { 
       UserName: '',
       Password: '',
       Email:'',
       FullName:''
         }
  }

  ngOnInit() { this.resetForm();
  }
  resetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.userInfo = {
      UserName: '',
      Password: '',
      Email:'',
      FullName:''
    }
  }

  //registering the new user and sending an alert if it is successful or if it failed
  OnSubmit(form : NgForm){
    this.authService.registerUser(form.value)
    .subscribe((data: any) => {
      if (data.Succeeded == true)
      {
      this.resetForm(form);
      this.toastr.success('CONGRATS! You are now a registered user for Rent-Flix.com. ENJOY!')
      }
      else 
      this.toastr.error(data.Errors[0]);
    });
  }
}
