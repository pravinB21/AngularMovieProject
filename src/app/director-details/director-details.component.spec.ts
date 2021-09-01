import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { DirectorDetailsComponent } from './director-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DirectorDetailsComponent', () => {
  let component: DirectorDetailsComponent;
  let fixture: ComponentFixture<DirectorDetailsComponent>;
  let httpMock: HttpTestingController;
  let httpTestingController: HttpTestingController;


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
    // spyOn(component, 'closeIt');
  
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
  
    // fixture.whenStable().then(() => {
    //   expect(component.closeIt).toHaveBeenCalled();
    // });
  });

 


  describe('#getAllDetails', () => {
    let expectedEmps: any;

    beforeEach(() => {
      //Dummy data to be returned by request.
      expectedEmps = [
        { id: 101, name: 'Krishna' },
        { id: 102, name: 'Arjun' },
      ];
    });

    //Test case 1
    it('should return expected details by calling once', () => {
      component
        .matchName('aditi')
        .subscribe(
          (emps: any) =>
            expect(emps).toEqual(
              expectedEmps,
              'should return expected employees'
            ),
          fail
        );

      const req = httpMock.expectOne(`http://localhost:4030/direct/aditi`);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedEmps); //Return expectedEmps
    });




    it('should return all details by calling once', () => {
      component
        .getData()
        .subscribe(
          (emps: any) =>
            expect(emps).toEqual(
              expectedEmps,
              'should return all data'
            ),
          fail
        );

      const req = httpMock.expectOne(`http://localhost:4030/direct`);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedEmps); //Return expectedEmps
    });

    it('should return expected details by calling once', () => {
      component.postData('aditi').subscribe(
        (emps:any) => expect(emps).toEqual(expectedEmps, 'should return expected employees'),
        fail
      );
  
      const req = httpMock.expectOne(`http://localhost:4030/direct/aditi`);
      expect(req.request.method).toEqual('GET');
  
      req.flush(expectedEmps); //Return expectedEmps
    });

    
   });

   it('match method should work fine',()=>{
     component.invalidName('aditi');
     expect(component.dirName).toBe('aditi');
   })

   it('match method should work fine',()=>{
    component.inValidAge(20);
    expect(component.ageFlag).toBe(false);
  })

  it('match method should work fine',()=>{
    component.inValidAge(2000);
    expect(component.ageFlag).toBe(true);
  })

});
