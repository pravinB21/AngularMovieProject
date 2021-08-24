import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-director-details',
  templateUrl: './director-details.component.html',
  styleUrls: ['./director-details.component.css']
})
export class DirectorDetailsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  dirName:any;
  token:any;

  ngOnInit(): void {
  }
  invalidName(name:any){
    console.log(name)
    this.dirName=name;
    this.matchName(this.dirName).subscribe(data=>{
      console.log(data)
      
      if(data.data != null){
        this.token=true;
      }else{
        this.token=false;
      }
    })
  }
  director1:any;
  onSubmit(details:any){
    console.log(details)
    this.director1=details;
    this.postData(this.director1).subscribe(data=>{
      const h1=document.getElementById('demo') 
      h1!.innerHTML='Added Successfully !!';
    })

  }

  getData(): Observable<any> {
    return this.http.get('http://localhost:4030/direct');
  }

  postData(user1: any) {
    return this.http.post('http://localhost:4030/direct', user1);
  }

  matchName(name:any): Observable<any> {
    return this.http.get(`http://localhost:4030/direct/${name}`);
  }

}
