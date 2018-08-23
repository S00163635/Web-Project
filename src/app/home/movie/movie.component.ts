import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../../IMovie';
import { Router } from '@angular/router';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movies: IMovie[];

  imageWidth: number = 75;
  imageMargin: number = 2;
  showImage: boolean = false;

  constructor(private router: Router) { }

  

//   //tester movies, to show that show image button works correctly
// moviesz: any[] = [

//   {
//     'movieID': 2,
//     'movieTitle': 'Step Brothers',
//     'movieYear': 2016,
//     'releaseDate': 'March 18, 2016',
//     'genre': 'comedy',
//     'price': 5.99,
//     'starRating': 5,
//     'imageURL': 'assets/Stepbrothers.jpg'

//   },
//   {
//     'movieID': 2,
//     'movieTitle': 'Step Brothers',
//     'movieYear': 2017,
//     'releaseDate': 'March 18, 2016',
//     'genre': 'family',
//     'price': 5.99,
//     'starRating': 5,
//     'imageURL': 'assets/Stepbrothers.jpg'

//   }
// ];

  ngOnInit() {
  }

 

  //method to show images when button is clicked
  ShowImageMethod():void{
    this.showImage = !this.showImage;
  }

  filterMovies(search) {
    if (search) {
      this.router.navigate(['home', { search: search }]);
    }
  
}
}
