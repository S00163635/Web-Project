import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './home/movie/movie.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




//for log in form
//https://stackoverflow.com/questions/39152071/cant-bind-to-formgroup-since-it-isnt-a-known-property-of-form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

//Toast - needed to send alert that registeration was sucessful
//https://www.npmjs.com/package/ngx-toastr
import {ToastrModule } from 'ngx-toastr';



//movie service for api
import { MoviesService } from './movie.service';

//routing
import { routes } from './app.router';
import { authService } from './auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    AboutComponent,
    UserComponent,
    LoginComponent,
    MovieComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    routes,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,// for database
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule //needed for toast

   
    
  ],
  providers: [MoviesService, authService],
  bootstrap: [AppComponent]
})
export class AppModule { }
