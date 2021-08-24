import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-director-search',
  templateUrl: './director-search.component.html',
  styleUrls: ['./director-search.component.css']
})
export class DirectorSearchComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  select: any
  getValue(event: any) {
    this.select = event.target.value;
  }
  name: any
  directorData: any
  movies:any
  directorFlag:boolean=false;
  directorFlag2:boolean=false;
  movieFlag:boolean=false;
  searchDirector(detail: any) {
    this.name = detail
    if (this.select === "director") {
      this.matchName(this.name).subscribe(data => {
        console.log(data);
        this.directorData = data.data;
        this.directorFlag=true;
        this.directorFlag2=false;
        this.movieFlag=false;

      })
    }
    else if (this.select === 'film') {
      this.getMovieDir(this.name).subscribe(data => {
        console.log(data)
        this.directorData=data.directordata;
        this.directorFlag=false;
        this.movieFlag=true;
        this.directorFlag2=false;
      
      })
    }
    if(this.select==='movie'){
      this.getAllMovies(this.name).subscribe(data=>{
        console.log(data);
        this.movies=data.movies;
        console.log(this.movies[0])
        this.directorFlag=false;
        this.movieFlag=false;
        this.directorFlag2=true;
      })
    }
  }
  matchName(name: any): Observable<any> {
    return this.http.get(`http://localhost:4030/direct/${name}`);
  }

  getMovieDir(name:any):Observable<any>{
    return this.http.get(`http://localhost:4030/filmsearch/${name}`)
  }
  getAllMovies(name:any):Observable<any>{
    return this.http.get(`http://localhost:4030/film/${name}`)
  }
}
