import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  deleteMovie(movie:any){
    console.log(movie)
    this.deleteFilm(movie).subscribe(data =>{
      console.log(data,'deleted')
      const h1=document.getElementById('demo') 
      h1!.innerHTML='deleted Successfully !!';
    })
  }

  

  deleteFilm(film:any): Observable<any> {
    return this.http.delete(`http://localhost:4030/deleteFilm/${film}`);
  }
}
