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

//for log in form
import { FormsModule } from '@angular/forms';


//movie service for api
import { MoviesService } from './movie.service';

//routing
import { routes } from './app.router';
//import { RouterModule, routes } from '@angular/router';


//  const router: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   {path: '', redirectTo:'/home', pathMatch: 'full'}

// ];




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
    FormsModule,
    //RouterModule.forRoot(router)
    routes
    
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
