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
  user:any;
  onSubmit(details:any){
    console.log(details)
this.user=details
    this.updateData(this.user.name,this.user).subscribe(data=>{
      console.log(data);
      this.modalCode();
    })


  }

  updateData(name:any,user:any): Observable<any> {
    return this.http.put(`http://localhost:4030/updateDirect/${name}`,user);
  }
}
