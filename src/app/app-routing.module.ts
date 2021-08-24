import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DirectorDetailsComponent } from './director-details/director-details.component';
import { DirectorSearchComponent } from './director-search/director-search.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  // {path:'',component:AppComponent},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'director',component:DirectorDetailsComponent},
  {path:'film',component:FilmDetailsComponent},
  {path:'update',component:UpdateComponent},
  {path:'search',component:DirectorSearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
