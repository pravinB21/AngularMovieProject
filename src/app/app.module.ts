import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectorDetailsComponent } from './director-details/director-details.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';
import { DirectorSearchComponent } from './director-search/director-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectorDetailsComponent,
    FilmDetailsComponent,
    HomeComponent,
    UpdateComponent,
    DirectorSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
