
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMovieComponent } from './delete-movie.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DeleteMovieComponent', () => {
  let component: DeleteMovieComponent;
  let fixture: ComponentFixture<DeleteMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ,FormsModule ,ReactiveFormsModule ], 
      providers: [DeleteMovieComponent],
      declarations: [ DeleteMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call closeIt',async() => {
    spyOn(component, 'closeIt');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.closeIt).toHaveBeenCalled();
    });
  });

});