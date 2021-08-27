import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DirectorSearchComponent } from './director-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DirectorSearchComponent', () => {
  let component: DirectorSearchComponent;
  let fixture: ComponentFixture<DirectorSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,FormsModule ,ReactiveFormsModule],
      providers: [DirectorSearchComponent],
      declarations: [ DirectorSearchComponent ]
    })
    .compileComponents();
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

  
});
