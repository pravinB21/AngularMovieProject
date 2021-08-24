import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  director1: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(details:any){
    console.log(details);
    this.director1=details;
    this.postData(this.director1).subscribe(data=>{
      const h1=document.getElementById('demo') 
      h1!.innerHTML='Added Successfully !!';
    })
  }

  getData(): Observable<any> {
    return this.http.get('http://localhost:4030/film');
  }

  postData(user1: any) {
    return this.http.post('http://localhost:4030/film', user1);
  }
}
