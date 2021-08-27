import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { FilmDetailsComponent } from './film-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




describe('FilmDetailsComponent', () => {
  let component: FilmDetailsComponent;
  let fixture: ComponentFixture<FilmDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ,FormsModule ,ReactiveFormsModule], 
      providers: [FilmDetailsComponent],
      declarations: [ FilmDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeDefined();
  });



//   it('should retrive posts from the api via get',()=>{
//     fixture = TestBed.createComponent(FilmDetailsComponent);

//     const dummyPosts=[
//       {
//         name:'abc',
//         boxOfficeCollection:10000,
//         ratings:8,
//         director:'apeksha'
//       },
//       {
//         name:'pqr',
//         boxOfficeCollection:20000,
//         ratings:9,
//         director:'arpita'
//       },
//       {
//         name:'xyz',
//         boxOfficeCollection:30000,
//         ratings:7,
//         director:'praveen'
//       }
//   ];
// fixture.getData().subscribe

//   })

//   // it('should create', () => {
//   //   const comp: FilmDetailsComponent = TestBed.get(FilmDetailsComponent);
//   //   expect(component).toBeTruthy();
//   // });

//   it('is form valid when empty',()=>{

//   })

it('should call closeIt',async() => {
  spyOn(component, 'closeIt');

  let button = fixture.debugElement.nativeElement.querySelector('button');
  button.click();

  fixture.whenStable().then(() => {
    expect(component.closeIt).toHaveBeenCalled();
  });
});


  
});


