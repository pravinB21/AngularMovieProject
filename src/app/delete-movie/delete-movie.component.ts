import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss']
})
export class DeleteMovieComponent implements OnInit {

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

  deleteMovie(movie:any){
    console.log(movie)
    this.deleteFilm(movie).subscribe(data =>{
      console.log(data,'deleted')
      this.modalCode();
    })
  }

  

  deleteFilm(film:any): Observable<any> {
    return this.http.delete(`http://localhost:4030/deleteFilm/${film}`);
  }



}
