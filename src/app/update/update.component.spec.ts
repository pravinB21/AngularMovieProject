import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update.component';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from 'protractor';

describe('UpdateComponent', () => {
  let component: UpdateComponent;
  let fixture: ComponentFixture<UpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      providers: [UpdateComponent],
      declarations: [UpdateComponent],
    }).compileComponents();
  });
  let h3: HTMLElement;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeDefined();
    h3 = fixture.nativeElement.querySelector('h3');
  });

  it('should create', () => {
    // const comp: UpdateComponent = TestBed.get(UpdateComponent);
    expect(component).toBeTruthy();
  });

  it('should have two movies', () => {
    expect(component.updateData.length).toEqual(2);
  });

  it('should have more than one movie', () => {
    expect(component.updateData.length).toBeGreaterThanOrEqual(1);
  });

  it('should have Add Film Button', () => {
    fixture = TestBed.createComponent(UpdateComponent);
    const btn = fixture.debugElement.nativeElement.querySelector('#update-btn');
    expect(btn.innerHTML).toBe('Add Film');
  });

  it('should call closeIt', async () => {
    spyOn(component, 'closeIt');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.closeIt).toHaveBeenCalled();
    });
  });
});
