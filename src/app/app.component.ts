import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rent-Flix';

  constructor( private router: Router) {}

  btnHome= function () {
    this.router.navigateByUrl('/home');
};
btnAbout= function () {
  this.router.navigateByUrl('/about');
};
btnLogin= function () {
  this.router.navigateByUrl('/login');
};



}
