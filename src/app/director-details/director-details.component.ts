import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-director-details',
  templateUrl: './director-details.component.html',
  styleUrls: ['./director-details.component.scss','../../common.scss']
})
export class DirectorDetailsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  dirName:any;
  token:any;

  ngOnInit(): void {
  }
  modal:any;
span:any;
  // modalCode = () => {
  //       this.modal = document.getElementById("myModal");
  //     // Get the <span> element that closes the modal
  //      this.span = document.getElementsByClassName("close")[0];
  
  //     this.modal.style.display = "block";
  
  //     // When the user clicks on <span> (x), close the modal
  //     this.span.onclick = function () {
  //      this.modal.style.display = "none";
        
  //     };
  
  //     // When the user clicks anywhere outside of the modal, close it
  //     // window.onclick = function (event) {
  //     //   if (event.target == modal) {
  //     //     this.modal.style.display = "none";
  //     //   }
  //     // };
  //   };
    closeIt(){
      this.modal.style.display="none";
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
      // this.modalCode();
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
