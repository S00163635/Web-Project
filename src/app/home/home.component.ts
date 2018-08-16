import { Component, OnInit } from '@angular/core';
import { IMovie } from '../IMovie';
import { MoviesService } from '../movie.service';
import 'rxjs/add/operator/switchMap';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  movieIds = ['tt6911608','tt3896198','tt3606756','tt0112697', 'tt3104988' ,'tt1201607',  'tt0838283','tt2015381', 'tt5220122'];
  movies: IMovie[];
  


  constructor( private movieServiceVariable: MoviesService) { 

    this.title = "Rent-Flix";
  }

  ngOnInit() {
    this.movieServiceVariable.getMovies(this.movieIds).subscribe((movies: IMovie[]) => {
      this.movies = movies;
    });
  }
}
