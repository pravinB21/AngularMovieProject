import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DirectorSearchComponent } from './director-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DirectorSearchComponent', () => {
  let component: DirectorSearchComponent;
  let fixture: ComponentFixture<DirectorSearchComponent>;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule ,ReactiveFormsModule],
      providers: [DirectorSearchComponent],
      declarations: [ DirectorSearchComponent ]
    })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeDefined();
  });

  it('should create', () => {
    const comp: DirectorSearchComponent = TestBed.get(DirectorSearchComponent);
    expect(component).toBeTruthy();
  });
  it('should have Add Film Button', () => {
    fixture = TestBed.createComponent(DirectorSearchComponent);
    const btn = fixture.debugElement.nativeElement.querySelector('#search-btn');
    expect(btn.innerHTML).toBe('Search');
  });

  
describe('#getAllEmployees', () => {
  let expectedEmps:any;

  beforeEach(() => {
    //Dummy data to be returned by request.
    expectedEmps = [
      { id: 101, name: 'Krishna' },
      { id: 102, name: 'Arjun' },
    ] 
  });
  
  //Test case 1
  it('should return expected details by calling once', () => {
    component.matchName('aditi').subscribe(
      (emps:any) => expect(emps).toEqual(expectedEmps, 'should return expected employees'),
      fail
    );

    const req = httpMock.expectOne(`http://localhost:4030/direct/aditi`);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedEmps); //Return expectedEmps
  });
    //Test case 1
    it('should return expected details by calling once', () => {
      component.getMovieDir('aditi').subscribe(
        (emps:any) => expect(emps).toEqual(expectedEmps, 'should return expected employees'),
        fail
      );
  
      const req = httpMock.expectOne(`http://localhost:4030/direct/aditi`);
      expect(req.request.method).toEqual('GET');
  
      req.flush(expectedEmps); //Return expectedEmps
    });
    it('should return expected details by calling once', () => {
      component.getAllMovies('aditi').subscribe(
        (emps:any) => expect(emps).toEqual(expectedEmps, 'should return expected employees'),
        fail
      );
  
      const req = httpMock.expectOne(`http://localhost:4030/direct/aditi`);
      expect(req.request.method).toEqual('GET');
  
      req.flush(expectedEmps); //Return expectedEmps
    });
});
it('should get proper output',() =>
{
  component.getValue('movie');
  component.searchDirector('aditi');
  expect(component.select).toBe('movie');
  expect(component.name).toBe('aditi');
});
it('movie',() =>
{ 
  component.select = 'movie';
  component.searchDirector('aditi');
 expect(component.name).toBe('aditi');
});
it('director',() =>
{ 
  component.select = 'director';
  component.searchDirector('aditi');
 expect(component.name).toBe('aditi');
});
it('film',() =>
{ 
  component.select = 'film';
  component.searchDirector('aditi');
 expect(component.name).toBe('aditi');
})
});