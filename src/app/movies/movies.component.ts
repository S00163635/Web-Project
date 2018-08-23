import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs';
import { IMovie } from '../IMovie';
import { NgForm } from '@angular/forms/src/directives';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: IMovie;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, private _moviesService: MoviesService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this._moviesService.getMovieById(id)
        .subscribe((movie: IMovie) => {
          this.movie = movie;
        })
    })
  }

}
