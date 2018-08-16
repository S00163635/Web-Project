import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './home/movie/movie.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoviesService } from './movie.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    AboutComponent,
    UserComponent,
    LoginComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule
    
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
