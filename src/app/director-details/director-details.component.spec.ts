import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { DirectorDetailsComponent } from './director-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DirectorDetailsComponent', () => {
  let component: DirectorDetailsComponent;
  let fixture: ComponentFixture<DirectorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule ,FormsModule ,ReactiveFormsModule,HttpClientModule], 
      providers: [DirectorDetailsComponent],
      declarations: [ DirectorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  // it('should create', () => {
  //   const comp: DirectorDetailsComponent = TestBed.get(DirectorDetailsComponent);
  //   expect(component).toBeTruthy();
  // });
  
  it('should call closeIt',async() => {
    spyOn(component, 'closeIt');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    fixture.whenStable().then(() => {
      expect(component.closeIt).toHaveBeenCalled();
    });
  });

});
