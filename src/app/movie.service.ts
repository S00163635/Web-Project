import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovie } from './IMovie';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http/src/response';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { tap } from 'rxjs/operators';


@Injectable()
export class MoviesService {

    //my api key for OMDB is 3047162d, which is added to the API request
    private movieAPIurl = 'http://www.omdbapi.com/?apikey=3047162d';

    constructor(private _http: HttpClient) { }

  

    //bringing in an array of movies from  the API
  getMovies(ids: string[]): Observable<IMovie[]> {
    const movieRequests: Observable<IMovie>[] = ids.map(id => this.getMovieById(id));
    return Observable.forkJoin(movieRequests);
  }

  //By ID
  getMovieById(id: string): Observable<IMovie> {
    return this._http.get<IMovie>(`${this.movieAPIurl}&&i=${id}`)
      .do(data => console.log('Movie: ' + JSON.stringify(data)))
      .catch(this.handleError)
  }

  getMoviesByFilteredBy(filtered: string): Observable<IMovie[]> {
    return this._http.get<IMovie[]>(`${this.movieAPIurl}&&s=${filtered}`)
      .map(response => response['Filtered'])
      .do(data => console.log('Movies: ' + JSON.stringify(data)))
      .catch(this.handleError)
  }

  private handleError(err : HttpErrorResponse){
    return Observable.throw(err.message);
  }
}