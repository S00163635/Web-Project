import { Component, OnInit } from '@angular/core';
import { IMovie } from '../IMovie';
import { MoviesService } from '../movie.service';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  movieIds = ['tt6911608','tt3896198','tt3606756','tt0112697', 'tt3104988' ,'tt1201607',  'tt0838283','tt2015381', 'tt5220122', 'tt0445934', 'tt1229340'];
  movies: IMovie[];
  filteredMovies: IMovie[];
  filtered:string;

  //subscription is to do with importing a resource (etc. execution of an observable)
  subscription: Subscription;
  


  constructor( private movieServiceVariable: MoviesService,private route: ActivatedRoute  ) { 

    this.title = "Rent-Flix";
  }

  ngOnInit() {
    //searching through api using the ID
    this.movieServiceVariable.getMovies(this.movieIds).subscribe((movies: IMovie[]) => {
      this.movies = movies;
    });
  
//this code is searching through the api and subscribing to that movie with the searched word instead of the ID
   this.subscription = this.route.params.subscribe(params => {
     this.filtered = params['filter'];
     if (this.filtered) {
       this.movieServiceVariable.getMoviesByFilteredBy(this.filtered)
         .subscribe((movies: IMovie[]) => {
           this.filteredMovies = movies;
         })
     }
   })
  }

   ngOnDestroy() {
     this.subscription.unsubscribe();
   }
}
