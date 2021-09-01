import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectorDetailsComponent } from './director-details/director-details.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { DirectorSearchComponent } from './director-search/director-search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectorDetailsComponent,
    FilmDetailsComponent,
    HomeComponent,
    UpdateComponent,
    DirectorSearchComponent,
    DeleteMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
