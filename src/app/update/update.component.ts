import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  user:any;
  onSubmit(details:any){
    console.log(details)
this.user=details
    this.updateData(this.user.name,this.user).subscribe(data=>{
      console.log(data);
      const h1=document.getElementById('demo') 
      h1!.innerHTML='updated Successfully !!';
    })


  }

  updateData(name:any,user:any): Observable<any> {
    return this.http.put(`http://localhost:4030/updateDirect/${name}`,user);
  }
}
