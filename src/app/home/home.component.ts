import { Component, OnInit } from '@angular/core';
import { IMovie } from '../IMovie';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  search: string;
  movies: IMovie[];
  


  constructor() { 

    this.title = "Emily's Movie Rentals";
  }

  ngOnInit() {
  }

}
