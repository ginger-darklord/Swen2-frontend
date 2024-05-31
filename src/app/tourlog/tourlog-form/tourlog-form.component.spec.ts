import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourlogFormComponent } from './tourlog-form.component';

describe('TourlogFormComponent', () => {
  let component: TourlogFormComponent;
  let fixture: ComponentFixture<TourlogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourlogFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourlogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
