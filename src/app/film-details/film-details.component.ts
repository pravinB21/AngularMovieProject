import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  director1: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
modal:any;
span:any;
  modalCode = () => {
        this.modal = document.getElementById("myModal");
      // Get the <span> element that closes the modal
       this.span = document.getElementsByClassName("close")[0];
  
      this.modal.style.display = "block";
  
      // When the user clicks on <span> (x), close the modal
      this.span.onclick = function () {
       this.modal.style.display = "none";
        
      };
  
      // When the user clicks anywhere outside of the modal, close it
      // window.onclick = function (event) {
      //   if (event.target == modal) {
      //     this.modal.style.display = "none";
      //   }
      // };
    };
    closeIt(){
      this.modal.style.display="none";
    }
  onSubmit(details:any){
    console.log(details);
    this.director1=details;
    this.postData(this.director1).subscribe(data=>{
      this.modalCode();
    })
  }

  getData(): Observable<any> {
    return this.http.get('http://localhost:4030/film');
  }

  postData(user1: any) {
    return this.http.post('http://localhost:4030/film', user1);
  }
}
