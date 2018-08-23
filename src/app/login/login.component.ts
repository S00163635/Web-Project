import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm: FormGroup;
  errorMessage: string;
  isLoginError : boolean = false;
  

  constructor(private authService : authService, private router: Router) { }

  ngOnInit() {    
  }
  
  //searching for entered email and password to see if they are currently a user
    OnSubmit(UserName,Password){
      this.authService.userAuthentication(UserName,Password).subscribe((data : any)=>{
       localStorage.setItem('userToken',data.access_token);
       this.router.navigate(['/home']);
     },

     //security for login is working (to work html is compromised and doesn't look as user friendly/stylish as before) 
     (err : HttpErrorResponse)=>{
       this.isLoginError = true; //if they are not a current user
     });
   }
}
